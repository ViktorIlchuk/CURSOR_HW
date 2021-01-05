import {getMaxCoast} from "../../homework-01/js/main";
import img from '../../homework-12/images/background.jpg';
import '../../homework-12/css/main.css';
import './style.css'

const orange = 15.678;
const mango = 123.965;
const avokado = 90.2345;

getMaxCoast(orange, mango, avokado);



document.body.innerHTML = `<img src="${img}" alt="">`;