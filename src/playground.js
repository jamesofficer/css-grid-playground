Vue.config.devtools = true;

new Vue({
    el: '#grid-container',
    data: {
        items: [],
        selected: undefined,
        columnCount: 1,
        rowCount: 1,
        gridGap: 10,
    },

    methods: {
        addItem() {
            this.items.push({
                type: 'Grid Item',
                text: this.items.length + 1,
                width: undefined,
                height: undefined,
                alignSelf: 'stretch',
                justifySelf: 'stretch',
            });
        },

        selectGridItem(index) {
            this.selected = this.items[index];
        },

        setItemProperty(value, property) {
            console.log(value);
            console.log(property);
        }
    }
})