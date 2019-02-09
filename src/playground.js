Vue.config.devtools = true;

new Vue({
    el: '#css-grid-playground',

    data: {
        grid: {
            columns: 3,
            rows: 3,
            gap: 10,
            justifyContent: 'auto',
            alignContent: 'auto',
            justifyItems: 'auto',
            alignItems: 'auto',
        },

        items: [],

        selected: {},
    },

    methods: {
        addItem() {
            this.items.push({
                type: 'Grid Item',
                selected: false,
                text: this.items.length + 1,
                width: 'auto',
                height: 'auto',
                alignSelf: 'auto',
                justifySelf: 'auto',
                gridColumnStart: 'auto',
                gridColumnEnd: 'auto',
                gridRowStart: 'auto',
                gridRowEnd: 'auto',
            });
        },

        removeItem() {
            this.items.splice(this.items.length - 1, 1);
        },

        selectGridItem(index) {
            if (this.selected) {
                this.selected.selected = false;
            }

            this.selected = this.items[index];
            this.selected.selected = true;
        },
    },
})