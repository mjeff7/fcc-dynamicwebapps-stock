// @flow

import React from 'react';

import { Input } from './input';
import { List } from './list';

import type { Color } from '../types';

const WaitSpinner = () =>
  <span className="spin">(W)</span>;

const SymbolTag = ({symbol, color, onClick, ready}) =>
  <div
    className="symbolTag"
    style={{color, backgroundColor: color}}
    onClick={onClick}
  >
    <span className="symbolTag-span">
      {symbol}
      {ready || <span> <WaitSpinner/></span>}
    </span>
  </div>;

const InputPanel =
  ({addSymbol, colors, removeSymbol, readySymbols, symbols}
    : {addSymbol: string => void,
       colors: {[string]: Color},
       removeSymbol: string => void,
       readySymbols : Array<string>,
       symbols : Array<string>}) =>
  <div className="inputPanel">
    <Input
      className="inputPanel-input"
      onEnter={addSymbol}
      placeholder="Enter a symbol"
    />
    <List>
      {symbols.map(symbol =>
        <SymbolTag
          key={symbol}
          symbol={symbol}
          color={colors[symbol]}
          onClick={() => removeSymbol(symbol)}
          ready={readySymbols.includes(symbol)}
        />
      )}
    </List>
  </div>;

export default InputPanel;
