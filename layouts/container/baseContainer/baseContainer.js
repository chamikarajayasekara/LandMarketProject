import classNames from 'classnames';

export default function  Container(props){
    const classes = classNames("container max-w-full px-0",props.className);
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}