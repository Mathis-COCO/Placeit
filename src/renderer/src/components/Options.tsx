function Options(): JSX.Element {
    const optionsList = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5'];

    return (
        <div className="options-container">
            {optionsList.map((name, index) => (
                <div className='options'>
                    <p key={index} className='option-txt'>{name}</p>
                    <input type="checkbox" />
                </div>
            ))}
            <p><i>Press CTRL+R to back to main page</i></p>
        </div>
    )
}

export default Options;