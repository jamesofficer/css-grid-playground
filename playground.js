new Vue({
    el: '#grid-container',
    data: {
        items: [],
        selected: undefined,
        columnCount: 1,
        rowCount: 1,
    },
    methods: {
        addItem() {
            this.items.push({
                text: 'hello',
                width: 100,
                height: 100,
            });
        },

        selectGridItem(index) {
            this.selected = this.items[index];
        }
    }
})