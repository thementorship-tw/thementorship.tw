import SectionTitle from "@/components/pages/program-rules/SectionTitle";

const Reminders = () => {
  return (
    <section className="bg-neutral-1 py-[72px] md:py-[120px]">
      <div className="container px-5 md:px-10">
        <SectionTitle title="注意事項" serial="09" variant="light" />

        <ol className="list-disc pl-7 pt-[36px] text-body-lg text-neutral-10">
          <li>
            報名計劃則視為同意主辦單位使用參加者本次活動照片與資料，作為主辦單位活動文宣推廣，活動紀錄，以及行銷文宣使用。
          </li>
          <li>
            主辦單位將依據《個人資料保護法》妥善管理所有參加者之個人資料。參加者若對個人資料之查詢、更正或撤回使用有任何需求，請聯繫主辦單位處理。
          </li>
          <li>
            針對計劃相關規章、活動辦法，主辦單位保有隨時修改及終止之權利，如有任何內容變更或詳細注意事項，將公布於計劃粉絲專頁，恕不另行個別通知。
          </li>
          <li>
            獲得海選資格的報名者必須出席開幕式暨海選日實體活動，無故缺席者，視同放棄初選資格，將不予錄取。
          </li>
          <li>未通過第一階段書面審核的報名者，將不另行個別通知。</li>
          <li>
            閉幕式暨結業日為本計劃重要環節，所有計劃學員 (水手、航海士)
            必須出席。如因不可抗力因素無法參加，請最遲於活動一週前以書面形式向主辦單位請假，並說明具體原因。未請假或無正當理由缺席者，將視為未完成本計劃。
          </li>
          <li>
            計劃期間共安排 4 次與導師的實體月會，所有計劃學員 (水手、航海士)
            需盡量全程參與。每位學員僅能請假一次，並需於活動一週前以書面形式向主辦單位請假並獲核准。若超過一次請假或未事先請假缺席，將視為對計劃參與度不足，主辦單位有權提前終止您的參與資格。
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Reminders;
