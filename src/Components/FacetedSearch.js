import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import MealCard from './MealCard';
import { Accordion, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function FacetedSearch({meals, meats, base, spice_level, dietary_restrictions}){
    const [selectedMeats, setSelectedMeats] = useState(meats);
    const [selectedBase, setSelectedBase] = useState(base);
    const [selectedSpiceLevel, setSelectedSpiceLevel] = useState(spice_level);
    const [selectedDietaryRestrictions, setSelectedDietaryRestrictions] = useState(dietary_restrictions);
    const [selectedMeals, setSelectedMeals] = useState(meals);

    const refreshMealsOnMeatChange = (updatedMeats) => {
        console.log(updatedMeats);
        let newMeals = meals.filter((meal) =>
            updatedMeats.includes(meal.meat) && selectedBase.includes(meal.base) &&  selectedSpiceLevel.includes(meal.spice_level) && selectedDietaryRestrictions.includes(meal.dietary_restriction)
        );
        console.log(newMeals);
        return newMeals;
    }
    
    const refreshMealsOnBaseChange = (updatedBase) => {
        let newBase = meals.filter((meal) =>
            updatedBase.includes(meal.base) && selectedMeats.includes(meal.meat) && selectedSpiceLevel.includes(meal.spice_level) && selectedDietaryRestrictions.includes(meal.dietary_restriction)
        );

        return newBase;
    }

    const refreshMealsOnSpiceLevelChange = (updatedSpiceLevel) => {
        let newSpiceLevel = meals.filter((meal) =>
            updatedSpiceLevel.includes(meal.spice_level) && selectedMeats.includes(meal.meat) && selectedBase.includes(meal.base) && selectedDietaryRestrictions.includes(meal.dietary_restriction)
        );

        return newSpiceLevel;
    }

    const refreshMealsOnDRChange = (updatedDR) => {
        let newDR = meals.filter((meal) =>
            updatedDR.includes(meal.dietary_restriction) && selectedMeats.includes(meal.meat) && selectedBase.includes(meal.base) && selectedSpiceLevel.includes(meal.spice_level)
        );
        return newDR;
    }

    const handleMeatChange = (event) => {
        const value = event.target.value;

        const isChecked = event.target.checked;

        setSelectedMeats((selectedMeats) =>
        {

            const updatedMeats = isChecked? [...selectedMeats, value] : selectedMeats.filter((meat) => meat !== value);
            const newMeals = refreshMealsOnMeatChange(updatedMeats);
            setSelectedMeals(newMeals);
            return updatedMeats;
        }
        );
    }

    const handleBaseChange = (event) => {
        const value = event.target.value;

        const isChecked = event.target.checked;

        setSelectedBase((selectedMeats) =>
        {

            const updatedBase = isChecked? [...selectedBase, value] : selectedBase.filter((base) => base !== value);
            const newMeals = refreshMealsOnBaseChange(updatedBase);
            setSelectedMeals(newMeals);
            return updatedBase;
        }
        );
    }

    const handleSpiceLevelChange = (event) => {
        const value = event.target.value;

        const isChecked = event.target.checked;

        setSelectedSpiceLevel((selectedSpiceLevel) =>
        {

            const updatedSpiceLevel = isChecked? [...selectedSpiceLevel, value] : selectedSpiceLevel.filter((spice_level) => spice_level !== value);
            const newMeals = refreshMealsOnSpiceLevelChange(updatedSpiceLevel);
            setSelectedMeals(newMeals);
            return updatedSpiceLevel;
        }
        );
    }

    const handleDRChange = (event) => {
        const value = event.target.value;

        const isChecked = event.target.checked;

        setSelectedDietaryRestrictions((setSelectedDietaryRestrictions) =>
        {

            const updatedDR = isChecked? [...selectedDietaryRestrictions, value] : selectedDietaryRestrictions.filter((DR) => DR !== value);
            const newMeals = refreshMealsOnDRChange(updatedDR);
            setSelectedMeals(newMeals);
            return updatedDR;
        }
        );
    }
    return (
        <div>
            <Container fluid id="faceted-search-takeout">
                <Row>
                    <Col xs={4}>
                        <Accordion defaultActiveKey="0" alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header id="faceted-search-header">Meats</Accordion.Header>
                                <Accordion.Body id="faceted-search-checkboxes">
                                    <Form>
                                        <Form.Group controlId="formMeatsCheckbox">
                                            {meats.map((meat) =>
                                        <Form.Check type="checkbox" label={meat} value={meat} id={meat} onChange={handleMeatChange} checked={selectedMeats.includes(meat)}></Form.Check>)}
                                        </Form.Group>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header id="faceted-search-header">Base</Accordion.Header>
                                <Accordion.Body id="faceted-search-checkboxes">
                                    <Form>
                                    <Form.Group controlId="formBaseCheckbox">
                                        {base.map((base) =>
                                    <Form.Check type="checkbox" label={base} value={base} id={base} onChange={handleBaseChange} checked={selectedBase.includes(base)}></Form.Check>)}
                                    </Form.Group>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header id="faceted-search-header">Spice Level</Accordion.Header>
                                <Accordion.Body id="faceted-search-checkboxes">
                                    <Form.Group controlId="formPriceCheckbox">
                                        {spice_level.map((sl) =>
                                        <Form.Check type="checkbox" label={sl} value={sl} id={sl} onChange={handleSpiceLevelChange} checked={selectedSpiceLevel.includes(sl)}></Form.Check>)}
                                    </Form.Group>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header id="faceted-search-header">Dietary Restrictions</Accordion.Header>
                                <Accordion.Body id="faceted-search-checkboxes">
                                    <Form.Group controlId="formDietaryRestrictionsCheckbox">
                                        {dietary_restrictions.map((dr) =>
                                        <Form.Check type="checkbox" label={dr} value={dr} id={dr} onChange={handleDRChange} checked={selectedDietaryRestrictions.includes(dr)}></Form.Check>)}
                                    </Form.Group>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col xs={7}>
                        <div>
                            {/* May need to make each card into display inline-block and have a set width to fix the gaps remaining issue */}
                            <Container>
                                <Row>
                            {meals.map((meal) =>
                                <Col xs={4}>
                                    <MealCard title={meal.title} image={meal.image} rating={meal.rating} price={meal.price} description={meal.description} isVisible={selectedMeals.map((meal) => meal.title).includes(meal.title)}/>
                                    <br></br>
                                </Col>
                            )}
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
  
    )
}

export default FacetedSearch;