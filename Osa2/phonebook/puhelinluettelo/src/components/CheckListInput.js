const CheckListInput = ({ value, onChange }) => {
    return (
        <div>
            Filter shown names with: <input value={value} onChange={onChange} />
        </div>
    );
};

export default CheckListInput