
export function formatDate (startDate, EndDate) {
  let format = '日時：YYYY-MM-DD(day) hh:mm 〜 endh:endm';
  format = format.replace(/YYYY/g, startDate.getFullYear());
  format = format.replace(/MM/g, ('0' + (startDate.getMonth() + 1)).slice(-2));
  format = format.replace(/DD/g, ('0' + startDate.getDate()).slice(-2));
  format = format.replace(/hh/g, ('0' + startDate.getHours()).slice(-2));
  format = format.replace(/mm/g, ('0' + startDate.getMinutes()).slice(-2));

  const dayOfWeek = startDate.getDay();
  const dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][dayOfWeek];
  format = format.replace(/day/g, (dayOfWeekStr));

  format = format.replace(/endh/g, ('0' + EndDate.getHours()).slice(-2));
  format = format.replace(/endm/g, ('0' + EndDate.getMinutes()).slice(-2));

  return format;
}
