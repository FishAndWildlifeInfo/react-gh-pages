import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

// Form Elements
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import { DatePicker } from 'material-ui-pickers'
import DateFnsUtils from '@date-io/date-fns'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox'
import Select from '../Select/'
import LinearScale from '../LinearScale/'
import FishGrid from '../FishGrid/'

const styles = theme => ({
    title: {
        marginBottom: 32
    },
    underline: {
        textDecoration: 'underline'
    },
    required: {
        color: 'red'
    }
})

const lakes = {
    "lake_almanor": "Lake Almanor",
    "bass_lake": "Bass Lake",
    "boca_reservoir": "Boca Reservoir",
    "bowman_lake": "Bowman Lake",
    "bucks_lake": "Bucks Lake",
    "bullards_bar_reservoir": "Bullards Bar Reservoir",
    "donner_lake": "Donner Lake",
    "folsom_lake": "Folsom Lake",
    "hellhole_reservoir": "Hellhole Reservoir",
    "huntington_lake": "Huntington Lake",
    "lake_berryessa": "Lake Berryessa",
    "lake_don_pedro": "Lake Don Pedro",
    "lake_mcclure": "Lake McClure",
    "lake_oroville": "Lake Oroville",
    "lake_pardee": "Lake Pardee",
    "lake_spaulding": "Lake Spaulding",
    "lake_tahoe": "Lake Tahoe",
    "little_grass_valley": "Little Grass Valley",
    "new_melones_reservoir": "New Melones Reservoir",
    "pine_flat_lake": "Pine Flat Lake",
    "shasta_lake": "Shasta Lake",
    "shaver_lake": "Shaver Lake",
    "stampede_reservoir": "Stampede Reservoir",
    "trinity_lake": "Trinity Lake",
    "twin_lakes,_upper": "Twin Lakes, Upper",
    "union_valley_reservoir": "Union Valley Reservoir",
    "whiskeytown_lake": "Whiskeytown Lake"
}

const residences = {
    "alameda": "Alameda County",
    "alpine": "Alpine County",
    "amador": "Amador County",
    "butte": "Butte County",
    "calaveras": "Calaveras County",
    "colusa": "Colusa County",
    "contra_costa": "Contra Costa County",
    "del_norte": "Del Norte County",
    "el_dorado": "El Dorado County",
    "fresno": "Fresno County",
    "glenn": "Glenn County",
    "humboldt": "Humboldt County",
    "imperial": "Imperial County",
    "inyo": "Inyo County",
    "kern": "Kern County",
    "kings": "Kings County",
    "lake": "Lake County",
    "lassen": "Lassen County",
    "los_angeles": "Los Angeles County",
    "madera": "Madera County",
    "marin": "Marin County",
    "mariposa": "Mariposa County",
    "mendocino": "Mendocino County",
    "merced": "Merced County",
    "modoc": "Modoc County",
    "mono": "Mono County",
    "monterey": "Monterey County",
    "napa": "Napa County",
    "nevada_county": "Nevada County",
    "orange": "Orange County",
    "placer": "Placer County",
    "plumas": "Plumas County",
    "riverside": "Riverside County",
    "sacramento": "Sacramento County",
    "san_benito": "San Benito County",
    "san_bernardino": "San Bernardino County",
    "san_diego": "San Diego County",
    "san_francisco": "San Francisco County",
    "san_joaquin": "San Joaquin County",
    "san_luis_obispo": "San Luis Obispo County",
    "san_mateo": "San Mateo County",
    "santa_barbara": "Santa Barbara County",
    "santa_clara": "Santa Clara County",
    "santa_cruz": "Santa Cruz County",
    "shasta": "Shasta County",
    "sierra": "Sierra County",
    "siskiyou": "Siskiyou County",
    "solano": "Solano County",
    "sonoma": "Sonoma County",
    "stanislaus": "Stanislaus County",
    "sutter": "Sutter County",
    "tehama": "Tehama County",
    "trinity": "Trinity County",
    "tulare": "Tulare County",
    "tuolumne": "Tuolumne County",
    "ventura": "Ventura County",
    "yolo": "Yolo County",
    "yuba": "Yuba County",
    "other": "Other"
}

const states = {
    "az": "AZ",
    "nv": "NV",
    "or": "OR",
    "wa": "WA",
    "other": "Other"
}

const targetedSpecies = {
    "kokanee": "Kokanee",
    "chinook": "Chinook",
    "both": "Both"
}

class Form extends React.Component {

    state = {
        selectedDate: new Date(),
        state: 'ca',
        submit: false,
        multiDay: false
    }

    formComplete = () => {
        const {
            selectedDate,
            lake,
            numOfAnglers,
            numOfHoursFished,
            numOfRods,
            state,
            residence,
            sat_overall,
            sat_numOfFish,
            sat_sizeOfFish
        } = this.state

        return selectedDate && lake && numOfAnglers && numOfHoursFished && numOfRods && state && residence && sat_overall && sat_numOfFish && sat_sizeOfFish
    }

    handleDateChange = date => {
        this.setState({ selectedDate: date });
    }

    handleEndDateChange = date => {

        if(this.state.selectedDate && this.state.selectedDate < date) {
            this.setState({ endDate: date });
        }
    }

    range = (length, offset = 1) => {
        var obj = {}

        Array.from(Array(length).keys()).forEach((value, index) => {
            obj[index + offset] = index + offset
        })

        return obj
    }
    
    handleChange = (name, value) => {
        
        if (value === '') {
            value = undefined
        }

        this.setState({ [name]: value });
    }

    componentWillUpdate(nextProps, nextState) {
        console.log(nextState)
    }

    render() {
        const { classes } = this.props;
        const { selectedDate, endDate } = this.state;
        
        var submission = {
            "entry.1774382335": this.state.state === 'ca' ? 'CA' : states[this.state.state],
            "entry.1113825212": selectedDate.getFullYear() + '-' + ('0' + (selectedDate.getMonth() + 1)).slice(-2) + '-' + ('0' + selectedDate.getDate()).slice(-2),
            "entry.1069109389": endDate ? (endDate.getFullYear() + '-' + ('0' + (endDate.getMonth() + 1)).slice(-2) + '-' + ('0' + endDate.getDate()).slice(-2)) : undefined,
            "entry.978780858": lakes[this.state.lake],
            "entry.544223057": this.state.numOfAnglers,
            "entry.465386035": this.state.numOfHoursFished,
            "entry.2083749126": this.state.numOfRods,
            "entry.1594605968": this.state.residence === 'n/a' ? 'N/A' : residences[this.state.residence],
            "entry.245010161": this.state.targetedSpecies,
            "entry.926315835": this.state.kokanee_kept_lt10 || 0,
            "entry.1168566108": this.state.kokanee_released_lt10 || 0,
            "entry.877114646": this.state.kokanee_ad_clip_lt10 || 0,
            "entry.182249114": this.state.kokanee_kept_10 || 0,
            "entry.1899785101": this.state.kokanee_released_10 || 0,
            "entry.921596154": this.state.kokanee_ad_clip_10 || 0,
            "entry.1826766183": this.state.kokanee_kept_11 || 0,
            "entry.2118288753": this.state.kokanee_released_11 || 0,
            "entry.1062659070": this.state.kokanee_ad_clip_11 || 0,
            "entry.1846482354": this.state.kokanee_kept_12 || 0,
            "entry.1509350859": this.state.kokanee_released_12 || 0,
            "entry.520944888": this.state.kokanee_ad_clip_12 || 0,
            "entry.1460011487": this.state.kokanee_kept_13 || 0,
            "entry.436313363": this.state.kokanee_released_13 || 0,
            "entry.801137358": this.state.kokanee_ad_clip_13 || 0,
            "entry.1425365122": this.state.kokanee_kept_14 || 0,
            "entry.380712182": this.state.kokanee_released_14 || 0,
            "entry.19730656": this.state.kokanee_ad_clip_14 || 0,
            "entry.414278670": this.state.kokanee_kept_15 || 0,
            "entry.607088307": this.state.kokanee_released_15 || 0,
            "entry.470753667": this.state.kokanee_ad_clip_15 || 0,
            "entry.741881771": this.state.kokanee_kept_16 || 0,
            "entry.633709172": this.state.kokanee_released_16 || 0,
            "entry.1880163376": this.state.kokanee_ad_clip_16 || 0,
            "entry.931869452": this.state.kokanee_kept_17 || 0,
            "entry.774372847": this.state.kokanee_released_17 || 0,
            "entry.988927380": this.state.kokanee_ad_clip_17 || 0,
            "entry.888516751": this.state.kokanee_kept_18 || 0,
            "entry.122778817": this.state.kokanee_released_18 || 0,
            "entry.444245114": this.state.kokanee_ad_clip_18 || 0,
            "entry.94523867": this.state.kokanee_kept_19 || 0,
            "entry.1137583099": this.state.kokanee_released_19 || 0,
            "entry.905645079": this.state.kokanee_ad_clip_19 || 0,
            "entry.2050628999": this.state.kokanee_kept_gte20 || 0,
            "entry.1190430582": this.state.kokanee_released_gte20 || 0,
            "entry.1678122272": this.state.kokanee_ad_clip_gte20 || 0,
            "entry.502757154": this.state.chinook_kept_lt10 || 0,
            "entry.1717172748": this.state.chinook_released_lt10 || 0,
            "entry.1161055011": this.state.chinook_kept_10 || 0,
            "entry.1068593095": this.state.chinook_released_10 || 0,
            "entry.163459983": this.state.chinook_kept_11 || 0,
            "entry.1662185936": this.state.chinook_released_11 || 0,
            "entry.1380958071": this.state.chinook_kept_12 || 0,
            "entry.1239720748": this.state.chinook_released_12 || 0,
            "entry.872313204": this.state.chinook_kept_13 || 0,
            "entry.1672245887": this.state.chinook_released_13 || 0,
            "entry.1207753498": this.state.chinook_kept_14 || 0,
            "entry.1538963740": this.state.chinook_released_14 || 0,
            "entry.593831581": this.state.chinook_kept_15 || 0,
            "entry.515731364": this.state.chinook_released_15 || 0,
            "entry.143882022": this.state.chinook_kept_16 || 0,
            "entry.1209645714": this.state.chinook_released_16 || 0,
            "entry.1657416032": this.state.chinook_kept_17 || 0,
            "entry.956721839": this.state.chinook_released_17 || 0,
            "entry.576771471": this.state.chinook_kept_18 || 0,
            "entry.1123048741": this.state.chinook_released_18 || 0,
            "entry.1335534218": this.state.chinook_kept_19 || 0,
            "entry.966898868": this.state.chinook_released_19 || 0,
            "entry.574251591": this.state.chinook_kept_gte20 || 0,
            "entry.1877388184": this.state.chinook_released_gte20 || 0,
            "entry.1213613591": this.state.sat_overall,
            "entry.486866884": this.state.sat_numOfFish,
            "entry.162065823": this.state.sat_sizeOfFish,
        }
        console.log('states:', states)
        console.log('state:', this.state)
        console.log('submission:', submission)

        return (
        <div>
            { !this.state.submit && 
            <div>
                <Typography variant='h4'>Location and Angling Information</Typography>
                <br/>

                <Typography variant='body1'>Required fields are marked with a <span className={classes.required}>*</span></Typography><br/><br/>

                <Typography variant='h5'>{this.state.multiDay ? 'Start Date' : 'Date'}<span className={classes.required}>*</span></Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker keyboard value={selectedDate} onChange={this.handleDateChange}/>
                </MuiPickersUtilsProvider>
                <br/>

                <FormControlLabel
                    control={
                    <Checkbox
                        checked={this.state.multiDay}
                        onChange={() => this.setState({ multiDay: !this.state.multiDay })}
                        color="primary"
                    />
                    }
                    label="Multiday trip"
                />
                <br/><br/>

                { this.state.multiDay && (<span>
                <Typography variant='h5'>End Date<span className={classes.required}>*</span></Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker keyboard value={endDate} onChange={this.handleEndDateChange}/>
                </MuiPickersUtilsProvider>
                <br/><br/><br/>
                </span>)}

                <Select
                    label='Lake'
                    options={lakes}
                    selectedOption={this.state.lake}
                    onChange={value => this.handleChange('lake', value)}
                />
                <br/><br/>

                <Select
                    label='Number of Anglers'
                    defaultValue={0}
                    defaultLabel='0'
                    options={this.range(10)}
                    selectedOption={this.state.numOfAnglers}
                    onChange={value => this.handleChange('numOfAnglers', value)}
                />
                <br/><br/>

                <Select
                    label='Number of Hours Fished'
                    defaultValue={0}
                    defaultLabel='0'
                    options={this.range(12)}
                    selectedOption={this.state.numOfHoursFished}
                    onChange={value => this.handleChange('numOfHoursFished', value)}
                />
                <br/><br/>

                <Select
                    label='Number of Rods Used'
                    defaultValue={0}
                    defaultLabel='0'
                    options={this.range(10)}
                    selectedOption={this.state.numOfRods}
                    onChange={value => this.handleChange('numOfRods', value)}
                />
                <br/><br/>

                <Select
                    label='State of Residence'
                    noNone
                    options={states}
                    selectedOption={this.state.state}
                    defaultLabel='CA'
                    defaultValue='ca'
                    onChange={value => {
                        this.handleChange('state', value)

                        if(value !== 'ca') {
                            this.handleChange('residence', 'n/a')
                        } else {
                            this.handleChange('residence', '')
                        }
                    }}
                />
                <br/><br/>

                {this.state.state === 'ca' && (
                    <span>
                        <Select
                            label='County of Residence'
                            disabled={this.state.state !== 'ca'}
                            options={residences}
                            selectedOption={this.state.residence}
                            onChange={value => {
                                this.handleChange('residence', value)
                            }}
                        />
                        <br/><br/>
                    </span>
                )}

                <Select
                    label='Targeted Species'
                    options={targetedSpecies}
                    selectedOption={this.state.targetedSpecies}
                    onChange={value => this.handleChange('targetedSpecies', value)}
                />
                <br/><br/><br/>

                <br/><hr/>
                <Typography variant='h4'>Fish Information</Typography>
                <br/>

                <FishGrid
                    formState={this.state}
                    fish_id='kokanee'
                    fish='Kokanee'
                    onChange={(key, value) => this.handleChange(key, value)}
                />
                <br/><br/>

                <FishGrid
                    formState={this.state}
                    fish_id='chinook'
                    fish='Inland Chinook'
                    onChange={(key, value) => this.handleChange(key, value)}
                />
                <br/><br/>

                <br/><hr/>
                <Typography variant='h4'>Feedback</Typography>
                <br/><br/>

                <LinearScale
                    label='Overall Angling Experience Today'
                    leftLabel='Very Dissatisfied'
                    rightLabel='Very Satisfied'
                    onChange={value => this.handleChange('sat_overall', value)}
                />
                <br/><br/>

                <LinearScale
                    label='Number of Fish'
                    leftLabel='Very Dissatisfied'
                    rightLabel='Very Satisfied'
                    onChange={value => this.handleChange('sat_numOfFish', value)}
                />
                <br/><br/>

                <LinearScale
                    label='Size of Fish'
                    leftLabel='Very Dissatisfied'
                    rightLabel='Very Satisfied'
                    onChange={value => this.handleChange('sat_sizeOfFish', value)}
                />
                <br/><br/>
                <Button color='primary' variant='contained' disabled={!this.formComplete()} onClick={() => this.setState({ submit: true })}>Submit</Button>
            </div>
            }
            { this.state.submit && 
                <div>
                    <Typography variant='h6' style={{textAlign: 'center'}}>Thank you for filling out the survey</Typography>
                
                    <iframe title='submit window' style={{ display: 'none', height: 0, width: 0 }} src={"https://docs.google.com/forms/d/e/1FAIpQLSfK8v4xHnetEJH9B_qRJ9W6_gOQHRQgvUZf-Ms90eL-roJnZg/formResponse?usp=pp_url&submit=Submit&" + Object.keys(submission).map(entryId => entryId + '=' + submission[entryId]).join('&')}></iframe>
                </div>
            }
        </div>
        );
    }
}

//https://docs.google.com/forms/d/e/1FAIpQLSfK8v4xHnetEJH9B_qRJ9W6_gOQHRQgvUZf-Ms90eL-roJnZg/viewform?usp=pp_url&entry.1113825212=2019-02-03

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Form));