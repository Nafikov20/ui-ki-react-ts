import React, {useState} from 'react';
import {Checkbox, CheckboxGroup} from "ui-kit";
import './CheckboxPage.scss'
import {newGuid} from "../../utils/guid";

export interface ICheckedGroup {
    [T: string]: string[];
}

export const CheckboxPage: React.FC = () => {
    const checkboxGroupOptions =  {
        category: ['SmartPhones', 'Notebooks'],
    };

    const [checkedboxByGroup, setCheckedboxByGroup] = useState<ICheckedGroup>({
        category: []
    })
    const [checkedBox, setCheckedBox] = useState(false);

    const handleOnchangeCheckedBox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedBox(event.target.checked)
    }

    const handleChangeCheckedBoxGroup = (event: React.ChangeEvent<HTMLInputElement>, nameGroup: string) => {
        if(event.target.checked) {
            if(checkedboxByGroup[nameGroup].includes(event.target.value)) {
                setCheckedboxByGroup(prevState => ({
                    ...prevState
                }))
            } else {
                setCheckedboxByGroup(prevState => ({
                    ...prevState,
                    [nameGroup]: [...prevState[nameGroup], event.target.value],
                }))
            }
        } else {
            setCheckedboxByGroup(prevState => ({
                ...prevState,
                [nameGroup]: [...prevState[nameGroup].filter(x => x !== event.target.value)]
            }));
        }
    }


    return (
        <div className='CheckboxPage'>
            <h2>Checkbox</h2>
            <Checkbox
                id='1'
                isChecked={checkedBox}
                label='Singel'
                onChange={handleOnchangeCheckedBox}
            />
            <div>
                <pre>{JSON.stringify(checkedBox, null, 2)}</pre>
            </div>
            <h2>Checkbox Group</h2>
            <div className='CheckboxPage-CheckboxGroup'>
                {checkboxGroupOptions.category.map(label => (
                    <CheckboxGroup
                        checkedboxByGroup={checkedboxByGroup}
                        id={newGuid()}
                        key={newGuid()}
                        nameGroup="category"
                        label={label}
                        onChange={handleChangeCheckedBoxGroup}
                    />
                ))}
            </div>
            <div>
                <pre>{JSON.stringify(checkedboxByGroup, null, 2)}</pre>
            </div>
        </div>
    );
};
