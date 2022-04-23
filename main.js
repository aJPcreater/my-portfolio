// 名前
const myname = document.getElementById("myname");
myname.onclick = function () {
  myname.textContent = "名前 : 長澤達哉";
};

// 大学
const university = document.getElementById("university");
university.onclick = function () {
  university.classList.add("twoLines");
  university.textContent = "";
  line1 = document.createElement("p");
  line2 = document.createElement("p");
  line1.textContent = "大学 : 立命館大学";
  line2.textContent = "学科 : 情報理工学部";
  university.append(line1);
  university.append(line2);
};

// 住所
const prefecture = document.getElementById("prefecture");
prefecture.onclick = function () {
  prefecture.textContent = "住所 : 京都府亀岡市";
};

// 趣味
const hobbies = document.getElementById("hobbies");
hobbies.onclick = function () {
  hobbies.textContent = "趣味 : ゲーム、散歩、読書";
};

// 過去の習い事
const lessons = document.getElementById("lessons");
lessons.onclick = function () {
  lessons.classList.add("threeLines");
  lessons.textContent = "";
  line1 = document.createElement("p");
  line2 = document.createElement("p");
  line3 = document.createElement("p");
  line1.textContent = "過去の習い事 : ";
  line2.textContent = "水泳、空手、習字";
  line3.textContent = "ドッジボール、タグラグビー";
  lessons.append(line1);
  lessons.append(line2);
  lessons.append(line3);
};

// 部活
const clubs = document.getElementById("clubs");
clubs.onclick = function () {
  clubs.classList.add("twoLines");
  clubs.textContent = "";
  line1 = document.createElement("p");
  line2 = document.createElement("p");
  line1.textContent = "中学 : ハンドボール";
  line2.textContent = "高校 : ワンダーフォーゲル、ラグビー";
  clubs.append(line1);
  clubs.append(line2);
};

// 使用言語
const languages = document.getElementById("languages");
languages.onclick = function () {
  languages.classList.add("threeLines");
  languages.textContent = "";
  line1 = document.createElement("p");
  line2 = document.createElement("p");
  line3 = document.createElement("p");
  line1.textContent = "勉強中の言語 : ";
  line2.textContent = "Java、JavaScript、C、Ruby";
  line3.textContent = "Python、HTML/CSS";
  languages.append(line1);
  languages.append(line2);
  languages.append(line3);
};
