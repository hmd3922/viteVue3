import { onMounted, onUnmounted,reactive } from 'vue'
function useMousePosition() {
    interface position {
        x: Number,
        y:Number
    }
    const obj:position = reactive({
        x:0,
        y:0
    })
    const updateMouse = (e: MouseEvent) => {
        obj.x = e.pageX
        obj.y = e.pageY
    }
    onMounted(() => {
        document.addEventListener('click',updateMouse)
    })
    onUnmounted(() => {
        document.addEventListener('click',updateMouse)  
    })
    return obj
}
export default useMousePosition