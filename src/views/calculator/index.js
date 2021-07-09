import { Fragment } from 'react'
import StructureTwoColumns from '../../components/structure/twocolumns.structure'
import Title from './title'

const CalculatorView = (props) => {
    return (
        <Fragment>
            <StructureTwoColumns bucket1={[<Title />]} bucket2={[]} />
            <StructureTwoColumns bucket1={[]} bucket2={[]} />
        </Fragment>
    )
}

export default CalculatorView
