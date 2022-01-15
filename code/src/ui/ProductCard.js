import styles from './ProductCard.module.css';
function ProductCard(props){
    return(<div onClick={props.onClick} className={styles.smallcard}>{props.children}</div>);
}
export default ProductCard;