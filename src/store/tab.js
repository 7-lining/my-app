export default{
    state: {
        isCollapse: false //菜单是否隐藏
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse;
        }
    }
}