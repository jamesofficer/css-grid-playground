Vue.config.devtools = true;

new Vue({
    el: '#css-grid-playground',

    computed: {
        columnsString() {
            let columnsString = '';

            this.grid.columns.forEach(column => {
                columnsString += column.width + column.unit + ' ';
            });

            return columnsString;
        },

        rowsString() {
            let rowsString = '';

            this.grid.rows.forEach(row => {
                rowsString += row.width + row.unit + ' ';
            });

            return rowsString;
        },
    },

    data: {
        grid: {
            columns: [],
            rows: [],
            gap: 10,
            justifyContent: 'auto',
            alignContent: 'auto',
            justifyItems: 'auto',
            alignItems: 'auto',
        },

        items: [],

        selectedRow: undefined,
        selectedColumn: undefined,
        selectedGridItem: {},
    },

    methods: {
        addItem() {
            this.items.push({
                index: this.items.length,
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

        addColumn() {
            this.grid.columns.push({
                index: this.grid.columns.length,
                width: 1,
                unit: 'fr',
            });
        },

        removeColumn() {},

        selectColumn(index) {
            this.selectedRow = undefined;
            this.selectedColumn = index;
        },

        addRow() {
            this.grid.rows.push({
                index: this.grid.rows.length,
                width: 1,
                unit: 'fr',
            });
        },

        removeRow() {},

        selectRow(index) {
            this.selectedColumn = undefined;
            this.selectedRow = index;
        },

        removeItem() {
            this.items.splice(this.items.length - 1, 1);
        },

        selectGridItem(index) {
            if (this.selectedGridItem.index === index) {
                this.selectedGridItem.selected = false;
                this.selectedGridItem = {};
            } else {
                this.selectedGridItem.selected = false;
                this.selectedGridItem = this.items[index];
                this.selectedGridItem.selected = true;
            }
        },

        resetGridItem() {
            this.selectedGridItem.width = 'auto';
            this.selectedGridItem.height = 'auto';
            this.selectedGridItem.alignSelf = 'auto';
            this.selectedGridItem.justifySelf = 'auto';
            this.selectedGridItem.gridColumnStart = 'auto';
            this.selectedGridItem.gridColumnEnd = 'auto';
            this.selectedGridItem.gridRowStart = 'auto';
            this.selectedGridItem.gridRowEnd = 'auto';
        }
    },

    mounted() {
        this.grid.columns.push(
            { index: 0, width: 1, unit: 'fr' },
            { index: 1, width: 1, unit: 'fr'},
        );

        this.grid.rows.push(
            { index: 0, width: 1, unit: 'fr' },
            { index: 1, width: 1, unit: 'fr' }
        );

        this.items.push(
            {
                index: 0,
                selected: false,
                text: 1,
                width: 'auto',
                height: 'auto',
                alignSelf: 'auto',
                justifySelf: 'auto',
                gridColumnStart: 'auto',
                gridColumnEnd: 'auto',
                gridRowStart: 'auto',
                gridRowEnd: 'auto',
            },
            {
                index: 1,
                selected: false,
                text: 2,
                width: 'auto',
                height: 'auto',
                alignSelf: 'auto',
                justifySelf: 'auto',
                gridColumnStart: 'auto',
                gridColumnEnd: 'auto',
                gridRowStart: 'auto',
                gridRowEnd: 'auto',
            },
            {
                index: 2,
                selected: false,
                text: 3,
                width: 'auto',
                height: 'auto',
                alignSelf: 'auto',
                justifySelf: 'auto',
                gridColumnStart: 'auto',
                gridColumnEnd: 'auto',
                gridRowStart: 'auto',
                gridRowEnd: 'auto',
            },
            {
                index: 3,
                selected: false,
                text: 4,
                width: 'auto',
                height: 'auto',
                alignSelf: 'auto',
                justifySelf: 'auto',
                gridColumnStart: 'auto',
                gridColumnEnd: 'auto',
                gridRowStart: 'auto',
                gridRowEnd: 'auto',
            }
        );
    }
})