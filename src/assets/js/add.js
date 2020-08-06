
import { log, debounce } from "@/assets/js/tool.js";
class Addlog {
    @log()
    @debounce(1000)
    init() { }
}



export {
    Addlog
}