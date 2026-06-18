"use client";

import { useEffect, useState } from "react";
import { THEME } from "@/constants/theme";
import {
  CONTACT_SUBJECT,
  WEB3FORMS_ACCESS_KEY,
  WEB3FORMS_ENDPOINT,
} from "@/constants/contact";

type ContactDialogProps = {
  /** 트리거 버튼 문구 */
  triggerLabel?: string;
  /** 트리거 버튼 className (호출 위치마다 스타일 지정) */
  triggerClassName: string;
};

type Status = "idle" | "sending" | "success" | "error";

/** 문의 모달 — 트리거 버튼을 누르면 작은 폼이 뜨고 Web3Forms로 직접 전송한다. */
export function ContactDialog({
  triggerLabel = "문의하기",
  triggerClassName,
}: ContactDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={triggerClassName}
      >
        {triggerLabel}
      </button>
      {open && <ContactModal onClose={() => setOpen(false)} />}
    </>
  );
}

function ContactModal({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  // Esc로 닫기
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // 허니팟: 봇이 채우면 조용히 성공 처리하고 전송 안 함
    if (data.get("botcheck")) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: CONTACT_SUBJECT,
          from_name: (data.get("name") as string) || "Lift 방문자",
          email: (data.get("email") as string) || undefined,
          message: data.get("message"),
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setError("전송에 실패했어요. 잠시 후 다시 시도해 주세요.");
      }
    } catch {
      setStatus("error");
      setError("네트워크 오류로 전송하지 못했어요. 잠시 후 다시 시도해 주세요.");
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
    >
      {/* 배경 클릭 시 닫기 */}
      <button
        type="button"
        aria-label="닫기"
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />

      <div
        className={`relative z-10 w-full max-w-md p-6 motion-safe:animate-fade-in-up sm:p-7 ${THEME.card}`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="absolute right-4 top-4 text-zinc-400 transition-colors hover:text-zinc-700"
        >
          ✕
        </button>

        {status === "success" ? (
          <div className="py-4 text-center">
            <p className="text-lg font-bold">문의가 전송됐어요 ✅</p>
            <p className={`mt-2 text-sm leading-relaxed ${THEME.textMuted}`}>
              확인 후 회신드릴게요. 감사합니다!
            </p>
            <button
              type="button"
              onClick={onClose}
              className={`mt-6 ${THEME.btnPrimary}`}
            >
              닫기
            </button>
          </div>
        ) : (
          <>
            <h2 id="contact-title" className="text-lg font-bold">
              문의하기
            </h2>
            <p className={`mt-1 text-sm leading-relaxed ${THEME.textMuted}`}>
              커리큘럼·수강 관련 무엇이든 편하게 남겨주세요.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
              {/* 허니팟 (사용자에게 숨김) */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden
              />

              <label className="flex flex-col gap-1.5 text-sm">
                <span className="font-medium">이름 (선택)</span>
                <input
                  name="name"
                  type="text"
                  className="min-h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-500"
                  placeholder="홍길동"
                />
              </label>

              <label className="flex flex-col gap-1.5 text-sm">
                <span className="font-medium">회신받을 이메일 (선택)</span>
                <input
                  name="email"
                  type="email"
                  className="min-h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-500"
                  placeholder="reply@example.com"
                />
              </label>

              <label className="flex flex-col gap-1.5 text-sm">
                <span className="font-medium">문의 내용</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="resize-none rounded-xl border border-zinc-300 p-3 text-sm outline-none focus:border-zinc-500"
                  placeholder="궁금한 점을 적어주세요."
                />
              </label>

              {status === "error" && (
                <p className="text-sm text-[#ff5c35]">{error}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className={`${THEME.btnPrimary} disabled:opacity-60`}
              >
                {status === "sending" ? "보내는 중…" : "보내기"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
