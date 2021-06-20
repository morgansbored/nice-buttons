import React from 'react';
import Button from './Button';
import { ButtonSizes, ButtonTypes } from './buttonTypes';
import { IconTypes } from "./iconTypes";
import "./styles.css";
export const App = () => {
    return(
        <React.Fragment>
            <div className="App">
                <Button
                size={ButtonSizes.MEDIUM} 
                label="Button"
                onClickHandler={() => alert("You clicked!")}
                type={ButtonTypes.PRIMARY}
                />
                <Button
                size={ButtonSizes.MEDIUM}
                label="Button"
                onClickHandler={() => alert("you clicked!")}
                type={ButtonTypes.PRIMARY}
                icon={IconTypes.SAVE}
                />
                <Button
                size={ButtonSizes.MEDIUM}
                label="Button"
                onClickHandler={() => alert("you clicked!")}
                type={ButtonTypes.PRIMARY}
                disabled
                />
                <Button
                size={ButtonSizes.MEDIUM}
                label="Button"
                onClickHandler={() => alert("you clicked!")}
                type={ButtonTypes.SECONDARY}
                />
                <Button
                size={ButtonSizes.MEDIUM}
                label="Button"
                onClickHandler={() => alert("you clicked!")}
                type={ButtonTypes.SECONDARY}
                disabled
                />
                <Button
                size={ButtonSizes.MEDIUM}
                label="Button"
                onClickHandler={() => alert("you clicked!")}
                type={ButtonTypes.TERTIARY}
                />
                <Button
                size={ButtonSizes.MEDIUM}
                label="Button"
                onClickHandler={() => alert("you clicked!")}
                type={ButtonTypes.TERTIARY}
                disabled
                />
                <Button
                size={ButtonSizes.SMALL}
                label="Button"
                onClickHandler={() => alert("you clicked!")}
                type={ButtonTypes.PRIMARY}
                />
                <Button
                size={ButtonSizes.LARGE}
                label="Button"
                onClickHandler={() => alert("you clicked!")}
                type={ButtonTypes.PRIMARY}
                />
                <Button
                size={ButtonSizes.LARGE}
                label="Button"
                onClickHandler={() => alert("you clicked!")}
                type={ButtonTypes.SECONDARY}
                />
            </div>
        </React.Fragment>
    );
};