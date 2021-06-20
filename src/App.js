import React from 'react';
import Button from './Button';
import { ButtonSizes, ButtonTypes, ButtonThemes } from './buttonTypes';
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

            <div className="App dark">
                <Button
                size={ButtonSizes.MEDIUM}
                label="Button"
                theme={ButtonThemes.DARK}
                onClickHandler={() => alert("you clicked!")}
                type={ButtonTypes.PRIMARY}
                />
                <Button
                size={ButtonSizes.MEDIUM}
                label="Button"
                onClickHandler={() => alert("you clicked!")}
                type={ButtonTypes.PRIMARY}
                icon={IconTypes.SAVE}
                theme={ButtonThemes.DARK}
                />
                <Button
                size={ButtonSizes.MEDIUM}
                label="Button"
                theme={ButtonThemes.DARK}
                onClickHandler={() => alert("you clicked!")}
                type={ButtonTypes.PRIMARY}
                disabled
                />
                <Button
                size={ButtonSizes.MEDIUM}
                label="Button"
                theme={ButtonThemes.DARK}
                onClickHandler={() => alert("you clicked!")}
                type={ButtonTypes.SECONDARY}
                />
                <Button
                size={ButtonSizes.MEDIUM}
                label="Button"
                theme={ButtonThemes.DARK}
                onClickHandler={() => alert("you clicked!")}
                type={ButtonTypes.SECONDARY}
                disabled
                />
                <Button
                size={ButtonSizes.MEDIUM}
                label="Button"
                theme={ButtonThemes.DARK}
                onClickHandler={() => alert("you clicked!")}
                type={ButtonTypes.TERTIARY}
                />
                <Button
                size={ButtonSizes.MEDIUM}
                label="Button"
                theme={ButtonThemes.DARK}
                onClickHandler={() => alert("you clicked!")}
                type={ButtonTypes.TERTIARY}
                disabled
                />
                <Button
                size={ButtonSizes.SMALL}
                label="Button"
                theme={ButtonThemes.DARK}
                onClickHandler={() => alert("you clicked!")}
                type={ButtonTypes.PRIMARY}
                />
                <Button
                size={ButtonSizes.LARGE}
                label="Button"
                theme={ButtonThemes.DARK}
                onClickHandler={() => alert("you clicked!")}
                type={ButtonTypes.PRIMARY}
                />
                <Button
                size={ButtonSizes.LARGE}
                label="Button"
                theme={ButtonThemes.DARK}
                onClickHandler={() => alert("you clicked!")}
                type={ButtonTypes.SECONDARY}
                />
          </div>
        </React.Fragment>
    );
};