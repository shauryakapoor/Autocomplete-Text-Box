import React from 'react'

export default class AutoCompleteText extends React.Component {
    constructor (props) {
        super(props);
        //These names will be shown in the autocomplete drop down
        this.items = [
            'David',
            'Damien',
            'Sara',
            'Jane',
        ];
    }

    render () {
        return (
            <div>
                <input type="text"/>
                <ul>
                    {this.items.map((item) => <li>{item}</li>)}
                </ul>
            </div>
        )
    }
}