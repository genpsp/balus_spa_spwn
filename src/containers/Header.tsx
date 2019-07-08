import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {Store} from '../store';
import {sampleActions} from '../modules/sample';
import styled from 'styled-components'

interface Props {
  number: number;
  updateNum: () => void;
}

class Header extends Component<Props> {
  render() {
    return (
      <Container>

      </Container>
    );
  }
}

const mapStateToProps = (state: Store) => {
  return {
    number: state.sample.number,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateNum: () => {
      dispatch(sampleActions.updateNum())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

const Container = styled.div`
  position: fixed;
  height: 60px;
  width: 100%;
  background-color: #000;
`