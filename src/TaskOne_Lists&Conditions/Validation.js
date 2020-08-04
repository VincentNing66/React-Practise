
const Validation = (props) => {
    if (props.len <= 5)
        return "Text Too short"
    return "Text long enough"
}

export default Validation 