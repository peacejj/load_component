const loadComponent = (name) => new Promise((resolve) => {
    const script = document.createElement('script');
    script.src=`http://xxx/${name}.js`;
    script.onload = script.onreadystatechange = function(){
       resolve();
    };
    document.querySelector('head').appendChild(script);
  })
  
  const addComp = async (name) => {
     await loadComponent(name);
     // 注册组件，其中 app 为 Vue 应用实例对象
     app.component(name, window.share[name]);
  }
  
  // 动态注册组件
  addComp('A');