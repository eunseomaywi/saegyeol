/**
 * 한국 시간(KST) 기준으로 지정된 날짜의 연, 월, 일, 시, 분, 초를 반환합니다.
 * @param {Date} date 
 * @returns {{year: number, month: number, day: number, hour: number, minute: number, second: number}}
 */
export function getKstParts(date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false
  }).formatToParts(date);

  const kst = {};
  parts.forEach(part => {
    kst[part.type] = part.value;
  });

  return {
    year: Number(kst.year),
    month: Number(kst.month),
    day: Number(kst.day),
    hour: Number(kst.hour),
    minute: Number(kst.minute),
    second: Number(kst.second)
  };
}

/**
 * 특정 연도와 월(1~12)의 마지막 날짜를 구합니다. (윤년 자동 반영)
 * @param {number} year 
 * @param {number} month 
 * @returns {number}
 */
export function getLastDayOfMonth(year, month) {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

/**
 * KST 기준으로 연, 월, 일을 받아 Date 객체를 생성합니다.
 * @param {number} year 
 * @param {number} month 
 * @param {number} day 
 * @param {number} hour 
 * @param {number} minute 
 * @param {number} second 
 * @returns {Date}
 */
export function createKstDate(year, month, day, hour = 0, minute = 0, second = 0) {
  const y = String(year).padStart(4, "0");
  const m = String(month).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  const h = String(hour).padStart(2, "0");
  const min = String(minute).padStart(2, "0");
  const s = String(second).padStart(2, "0");
  return new Date(`${y}-${m}-${d}T${h}:${min}:${s}+09:00`);
}

/**
 * KST 기준으로 오늘 날짜로부터 가장 가까운 미래의 월말 자정(00:00:00 KST)을 구합니다.
 * @param {Date} now 
 * @returns {Date}
 */
export function getNextPublishDate(now = new Date()) {
  const { year, month, day } = getKstParts(now);
  const lastDay = getLastDayOfMonth(year, month);
  const currentMonthDeadline = createKstDate(year, month, lastDay, 0, 0, 0);

  if (now.getTime() >= currentMonthDeadline.getTime()) {
    // 이미 이번 달 말일 자정이 지났다면 다음 달 말일이 타겟
    let nextMonth = month + 1;
    let nextYear = year;
    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear += 1;
    }
    const nextLastDay = getLastDayOfMonth(nextYear, nextMonth);
    return createKstDate(nextYear, nextMonth, nextLastDay, 0, 0, 0);
  }

  return currentMonthDeadline;
}

/**
 * Date 객체를 "YYYY년 M월 D일" 형식으로 포맷팅합니다.
 * @param {Date} date 
 * @returns {string}
 */
export function formatPublishDate(date) {
  const { year, month, day } = getKstParts(date);
  return `${year}년 ${month}월 ${day}일`;
}
