module.exports = {
    baseUrl: '/' ,	// 根路径
    outputDir: 'dist',	// 构建输出目录
    assetsDir: 'assets' ,   //  静态资源目录，包含（js ，css ，img ，fonts ）
    lintOnSave: false,		// 是否开启 eslint 保存检查，有效值：true || false || 'error'（对语法进行严格检查）
    devServer:{
        open: true,	//cnpm run serve 后会自动开启8080端口页面
        host: 'localhost' , 	  //在本地开发时一般是localhost
        port: 8081 ,		// 修改端口号
        https: false ,		// 改成 true 时，http 会改成 https ，但是会警告
        hotOnly: false ,	// 如果添加一些新的模块，可以更好的给我们一些配置
        proxy: {	// 配置跨域
            '/api': {
            target: 'http://localhost:5000/api/',	// 设置的跨域地址
            ws: true,		// 是否跨域
            changOrigin: true,
            pathRewrite: {
                '^/api': ' '
                }
            }
        }
    }
};