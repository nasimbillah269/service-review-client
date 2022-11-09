import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Special food service review`;
    }, [title])
}

export default useTitle;