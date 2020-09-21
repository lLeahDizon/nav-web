const $siteList = $(".siteList");
const $lastLi = $siteList.find("li.last");
const x = localStorage.getItem("x");
const xObject = JSON.parse(x);
const hashMap = xObject || [
  {
    logo: "images/bilibili.png",
    logoType: "image",
    url: "https://m.bilibili.com/",
  },
  { logo: "G", logoType: "text", url: "https://github.com/" },
];

const render = () => {
  $siteList.find("li:not(.last)").remove();
  hashMap.forEach((node) => {
    const $li = $(`<li>
        <a href="${node.url}">
            <div class="site">
              <dig class="logo">${node.logo[0]}</dig>
              <div class="link">${node.url}</div>
            </div>
        </a>
  </li>`).insertBefore($lastLi);
  });
};

render();

$(".addButton").on("click", () => {
  let url = window.prompt("请问你要添加的网址是啥？");
  if (url.indexOf("http") !== 0) {
    url = "http://" + url;
  }
  hashMap.push({ logo: url[0], logoType: "text", url: url });
  render();
});

window.onbeforeunload = () => {
  const string = JSON.stringify(hashMap);
  localStorage.setItem("x", string);
};
