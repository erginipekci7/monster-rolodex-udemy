import './card-list.style.css';
import { Card } from '../card/card.component';

export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(
            monster => (
                <Card key={monster.Id} monster = {monster} />
            )
        )}
    </div>
)