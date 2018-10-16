const { UMind, React, ReactDOM } = window;

const DEFAULT_DATA = {
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

// 读取数据
const handleRead = () => {
  let data;

  const json = localStorage.getItem('data');

  if (json) {
    data = JSON.parse(json);
  } else {
    data = DEFAULT_DATA;
  }

  return data;
};

// 保存数据
// 回调函数触发时机：
// 1. 用户主动保存
// 2. 每次命令操作
const handleSave = (data) => {
  localStorage.setItem('data', JSON.stringify(data));
};

ReactDOM.render(
  React.createElement(UMind.default,
    {
      data: handleRead(),
      save: handleSave,
    }),
  document.getElementById('root'),
);
