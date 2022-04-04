import {Bubblesort} from './Bubblesort';
import {Mergesort} from './Mergesort';
import {Solver} from './Solver';

const mySolver = new Solver([1, 2, 3], new Bubblesort());
mySolver.logic();

mySolver.setStrategy(new Mergesort());
mySolver.logic();