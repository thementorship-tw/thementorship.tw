import { FAQType } from "@/types/filter-option";

export const FAQ_FILTER_OPTIONS: {
  key: FAQType | "all";
  name: string;
}[] = [
  { key: "all", name: "全部" },
  { key: "registration", name: "報名相關" },
  { key: "monthlyMeeting", name: "月會相關" },
  { key: "lecture", name: "講座相關" },
  { key: "payment", name: "付費相關" },
];

export const FAQ: Record<
  FAQType,
  {
    question: string;
    answer: string;
  }[]
> = {
  registration: [
    {
      question: "如果對想申請的組別沒有相關實務經驗，還能申請嗎?",
      answer:
        "本計劃建議申請者在申請的職能領域具備 1-3 年（含）相關實務經驗 (包含實習時間)，以便能充分參與並從活動中獲益。然而錄取與否仍主要依據您在申請表中的填答內容、您的期待是否與計劃目標相符，以及我們是否能提供符合您需求的資源與建議。我們鼓勵符合條件的申請者根據自身狀況進行綜合評估並提交申請。詳情請參閱報名表中的內容說明。",
    },
    {
      question: "如果未錄取水手 / 航海士是否會收到通知?",
      answer:
        "如果第一階段書審未通過，恕不另行通知；第二階段起，無論是否錄取，我們都會發出通知，感謝您的耐心等候與理解。",
    },
    {
      question: "可以知道未錄取的原因嗎?",
      answer:
        "每組的篩選結果是由引水人和船長共同討論後所決定。我們最重視的是「計劃是否能真正對您有所幫助」，這包括您的期待是否與曼陀號計劃的目標相符，以及這屆船長的經驗和課程內容是否能為您提供實質建議等。感謝您的理解與支持！",
    },
  ],
  monthlyMeeting: [
    {
      question: "有機會去旁聽別組的月會嗎？ 如果錄取某組還有機會跟別組交流嗎？",
      answer:
        "月會旁聽的安排，將綜合評估月會主題的適合性、場地大小等因素來決定，並尊重船長考量。在不影響月會品質的前提下，我們會盡量提供機會，讓學員能與其他組的夥伴互相學習。月會以外，我們也將籌劃跨組交流，確保您有機會拓展不同職能的人脈網絡。",
    },
  ],
  lecture: [
    {
      question:
        "如果原先報名了曼陀號實體講座，後來因故想轉為線上參加，可以嗎？",
      answer:
        "由於報名系統限制，實體票無法轉為線上票，故請於報名時先確認好參加方式，敬請見諒。",
    },
    {
      question: "線上講座結束後會提供錄影回放嗎？",
      answer:
        "依每場講師考量而定，具體資訊請參考曼陀號臉書針對該場講座的相關貼文。",
    },
  ],
  payment: [
    {
      question: "報名繳費可以使用哪些支付方式?",
      answer:
        "我們目前接受「線上刷卡」、「LINE Pay」、「街口支付」、「國泰世華 ATM」、「全家超商繳費」五種方式。",
    },
    {
      question: "是否可以申請開立發票？",
      answer:
        "由於我們是純粹由熱心志工團隊推動的計劃，並未設立登記組織，因此目前無法提供發票服務。",
    },
    {
      question: "已報名並繳費的活動，如果臨時無法參加，可以退費嗎?",
      answer:
        "感謝您對活動的支持！由於活動籌備需事先安排場地、資源與相關材料，因此報名繳費完成後恕無法辦理退費。若您臨時無法參加，我們誠摯邀請您關注後續活動，並期待未來有機會與您相見！",
    },
  ],
};
