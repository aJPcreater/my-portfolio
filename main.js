const knowButton = document.getElementById("know-button");
const selfIntroduction = document.getElementById("self-introduction");

count = 0;

me = [
  "name: 長澤　達哉", // 0
  "University: 立命館大学", // 1
  "Department/Subject/Course: 情報理工学部 / 情報理工学科 / 実世界情報コース",
  "prefecture: 京都府", // 2
  "hobbies: ゲーム", // 3
  "散歩", // 4
  "読書", // 5
  "lessons(in Elementary School): 水泳",
  "空手",
  "習字",
  "ドッジボール",
  "タグラグビー",
  "club(in J.H.S.): ハンドボール",
  "clubs(in High School): ワンダーフォーゲル",
  "ラグビー",
];

knowButton.onclick = function () {
  const element = document.createElement("div");
  element.setAttribute("class", "me");
  if (count === 5) {
    const hobbies = document.getElementById("hobbies");
    hobbies.textContent += me[count];
    hobbies.textContent += ", ";
  } else if (count === 6) {
    const hobbies = document.getElementById("hobbies");
    hobbies.textContent += me[count];
  } else {
    element.textContent = me[count];
    if (count === 4) {
      element.setAttribute("id", "hobbies");
      element.textContent += ", ";
    }
    if (count === 15) {
      element.setAttribute("id", "mei");
      delete count;
      knowButton.parentNode.removeChild(knowButton);
    }
  }
  count++;
  console.log(count);
  selfIntroduction.append(element);
};
