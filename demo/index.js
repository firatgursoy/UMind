const { UMind } = window;

// 读取数据
const data = {
  roots: [{
    label: '中心主题',
    children: [{
      label: '分支主题 1',
    }, {
      label: '分支主题 2',
    }, {
      label: '分支主题 3',
    }],
  }],
};

// 保存数据
// 回调函数触发时机：
// 1. 用户主动保存
// 2. 每次命令操作
const save = (/* data */) => {

};

UMind.init({
  data,
  save,
});
