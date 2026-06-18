/**
 * 문의 폼 설정.
 *
 * 받는 메일 주소는 여기에도, 클라이언트 번들에도 절대 두지 않는다.
 * Web3Forms access key에 연결된 서버 쪽 설정에만 저장되어 외부에 노출되지 않는다.
 * access key 자체는 공개되어도 안전한 값이라 NEXT_PUBLIC_ 환경변수로 주입한다.
 */
export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

export const CONTACT_SUBJECT = "Lift 문의";
export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
