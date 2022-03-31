Vue.createApp({
    data() {
        return{
            inputValue: '',
            needDoList: [],
            completeList: []
        }
    },

    methods: {
        handlyInput(event) {
            this.inputValue = event.target.value
        },


        addNewTask() {
            if(this.inputValue === '') {
                return
            }
            this.needDoList.push({
                title: this.inputValue,
                id: Date.now()
            })
            this.inputValue = ''
        },

        doCheck(index, type) {
            if(type === 'need') {
                const completeTask = this.needDoList.splice(index, 1)
                this.completeList.push(...completeTask)
            }

            else{
                const dontCompleteList = this.completeList.splice(index, 1)
                this.needDoList.push(...dontCompleteList)
            }
        },

        removeTask(index, type) {
            const toDoList = type === 'need' ? this.needDoList : this.completeList
            toDoList.splice(index, 1)
        }
    }
}).mount('#app')