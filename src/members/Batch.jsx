import { React , useState, Component} from 'react';
import { Tab, Tabs, Dropdown } from 'react-bootstrap'
import styled from 'styled-components';

function Batch({ yearName, Year, onSelect }){
 
  const DropDownList = styled("div")``;
  const ListItem = styled("p")``;
  const [selectedOption, setSelectedOption] = useState(null);
  const [activeTab, setActivetab] = useState(false);
  const [isOpen, setIsOpen]= useState(false);
  const index = yearName ? Year.findIndex((group) => group === yearName) : 0;

  const onIndexSelect = (e, index) => onSelect(Year[index]);
  const toggle = () => setIsOpen(!isOpen);

  const handleSelect=()=> {
    setActivetab(true);
  }

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
};
    return (
      <Tabs className="batchtabs" 
        value={index}
        onChange={onIndexSelect}
        onClick={toggle}
        onSelect={handleSelect}>
        <Tab eventKey={1}  title="All">
          {isOpen && <DropDownList>
            <ListItem onClick={onOptionClicked}>Mangoes</ListItem>
            <ListItem>Apples</ListItem>
            <ListItem>Oranges</ListItem>
          </DropDownList>
          }
        
        </Tab>
        <Tab eventKey={2} title="2020-21">
          
        </Tab>
        <Tab eventKey={3} title="2021-22"/>
        <Tab eventKey={4} title="2022-23"/>
        <Tab eventKey={5} title="MCA 2020-21"/>
      </Tabs>
      
    );

}

export default Batch;


