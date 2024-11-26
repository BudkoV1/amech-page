import React from 'react';
import './table.css'
import {
    AiFillFacebook,
    AiFillTwitterCircle,
    AiFillInstagram,
    AiFillPhone,
    AiFillMail,
    AiOutlineEnvironment,
    AiFillCreditCard,
    AiOutlineClockCircle
  } from "react-icons/ai";

const Table = () => {
  return (
    <table className='table'>
      <thead className='up'>
        <tr>
          <th>Как нас найти<br /> </th>
        </tr>
      </thead>
      <thead className='upp'>
        <tr>
            <th className='th' colSpan='2'>Реквизиты СТО "AMECH"</th>
        </tr>
      </thead>
      <tbody className='out'>
        <tr>
          <td><AiOutlineEnvironment /> Адрес</td>
          <td className='td'>Пушкина, 7а</td>
        </tr>
        <tr className='grey'>
          <td><AiFillPhone /> Телефон</td>
          <td className='td'>
            +375(29)123-45-67 <br />
            +375(29)123-78-90
          </td>
        </tr>
        <tr>
          <td><AiOutlineClockCircle /> Время работы</td>
          <td className='td'>Пн - Пт: 9:00 - 20:30 | Сб, Вс: Выходной</td>
        </tr>
        <tr className='grey'>
          <td ><AiFillMail /> E-mail</td>
          <td className='td'>amech@gmail.com</td>
        </tr>
        <tr>
          <td><AiFillCreditCard /> Реквизиты</td>
          <td className='td'>...</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;