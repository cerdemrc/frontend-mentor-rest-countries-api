import { ref } from 'vue'

export default function(){
    const darkMode = ref(false);

    const changeMode = () => {
      darkMode.value = !darkMode.value;
    };

    return {
      darkMode,
      changeMode,
    };
}