import React from 'react';
import Header from './Header';
import Pick from './Pick';
import Options from './Options';
import AddOption from './AddOption';
import Selected  from './Selected';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selected: undefined
    };

    handlePick = () => {
        const random = ~~(Math.random() * this.state.options.length);
        this.setState(() => ({ selected: this.state.options[random] }));
    };

    handleRemoveOption = (optionToRemove) => {
        this.setState((prevState) => ({ options: prevState.options.filter(option => option !== optionToRemove) }));
    };

    handleRemoveOptions = () => {
        this.setState((prevState, props) => ({ options: [] }));
    };

    handleAdd = option => {
        if (!option) {
            return 'Enter valid value to add new option.';
        } else if (this.state.options.indexOf(option) !== -1) {
            return 'This option already exists.';
        };
        this.setState((prevState) => ({ options: [...prevState.options, option] }));
    };

    handleClearSelected = () => {
        this.setState((prevState, props) => ({ selected: undefined }));
    };

    render() {
        return (
            <div>
                <Header title='Indecision' subtitle='What should you do?'/>
                <div className='content-container'>
                    <Pick disabled={this.state.options.length === 0} handlePick={this.handlePick}/>
                    <div className='list'>
                        <Options options={this.state.options} handleRemoveOption={this.handleRemoveOption} handleRemoveOptions={this.handleRemoveOptions}/>
                        <AddOption handleAdd={this.handleAdd}/>
                    </div>
                </div>
                <Selected selected={this.state.selected} handleClearSelected={this.handleClearSelected} />
            </div>
        );
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            this.setState(() => ({ options: JSON.parse(json) || [] }));
            
        } catch (err) {
            console.log(err);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        };
    }
}