const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const dbURL = process.env.MONGODB_URI || 'mongodb://localhost/wdi-project-2';
mongoose.connect(dbURL);

const User = require('../models/user');
const Station = require('../models/station');

User.collection.drop();
Station.collection.drop();

User
.create([{
  firstname: 'Suze',
  lastname: 'Shardlow',
  username: 'sshardlow',
  email: 'suze.shardlow1@gmail.com',
  password: 'password',
  passwordConfirmation: 'password'
},{
  firstname: 'test',
  lastname: 'User',
  username: 'test',
  email: 'suzeplays@gmail.com',
  password: 'password',
  passwordConfirmation: 'password'
}])
.then((users) => {
  console.log(`${users.length} users created!`);

  return Station
  .create([
    {name: 'Acton Town',
      latitude: 51.503057,
      longitude: -0.280462,
      lines: [
      {id: 'piccadilly', name: 'Piccadilly'},
      {id: 'circle', name: 'Circle'},
      {id: 'district', name: 'District'}
      ],
      naptan: '940GZZLUACT',
      zones: ['3'],
      streetAddress: 'Acton Town Station, London Underground Ltd., Gunnersbury Lane, London, W3 8HN',
      icsCode: '1000002'},

    {name: 'Aldgate',
    latitude: 51.514246,
    longitude: -0.075689,
    lines: [
    {id: 'circle',name: 'Circle'},
    {id: 'metropolitan',name: 'Metropolitan'}],
    naptan: '940GZZLUALD',
    zones: ['1'],
    streetAddress: 'Aldgate Station, London Underground Ltd., Aldgate High St, London, EC3N 1AH',
    icsCode: '1000003'},

    {name: 'Aldgate East',
      latitude: 51.515037,
      longitude: -0.072384,
      lines: [
        {id: 'hammersmith-city', name: 'Hammersmith & City'},
        {id: 'district',name: 'District'}
      ],
      naptan: '940GZZLUADE',
      zones: ['1'],
      streetAddress: 'Aldgate East Station, London Underground Ltd., Whitechapel High St, London, E1 7PT',
      icsCode:'1000004'},

    {name: 'Alperton', latitude: 51.540627, longitude :-0.29961,lines: [{id: 'piccadilly', name: 'Piccadilly'}], naptan: '940GZZLUALP', zones: ['4'], streetAddress: 'Alperton Station, London Underground Ltd., Ealing Rd, Wembley, Middlesex, HA0 4LL', icsCode:'1000005'},

    {name: 'Amersham', latitude: 51.674126, longitude: -0.607714,lines: [{id:'metropolitan', name: 'Metropolitan'}], naptan: '940GZZLUAMS', zones: ['9'], streetAddress: 'Amersham Station, Stn Approach, Amersham, Bucks HP6 5AZ', icsCode: '1000006'},

    {name: 'Angel', latitude: 51.532624, longitude: -0.105898, lines: [{id: 'northern', name: 'Northern'}], naptan: '940GZZLUAGL', zones: ['1'], streetAddress: 'Angel Station, London Underground Ltd., High Street, London, N1 9LQ', icsCode: '1000007'},

    {name: 'Archway',
      latitude: 51.565478,
      longitude: -0.134819,
      lines: [
      {id: 'northern', name: 'Northern'}],
      naptan: '940GZZLUACY',
      zones: ['2', '3'],
      streetAddress: 'Archway Station, London Underground Ltd., Junction Rd, London, N19 5RQ',
      icsCode: '1000008'},

    {name:'Arnos Grove',latitude:51.616446,longitude:-0.133062,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUASG',zones:['4'],streetAddress:'Arnos Grove Station,London Underground Ltd.,Bowes Rd,London,N11 1AN',icsCode:'1000009'},

    {name:'Arsenal',latitude:51.558655,longitude:-0.107457,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUASL',zones:['2'],streetAddress:'Arsenal Station,London Underground Ltd.,Highbury Hill,London,N5 1LP',icsCode:'1000010'},

    {name:'Baker Street',latitude:51.522883,longitude:-0.15713,lines:[{id:'jubilee',name:'Jubilee'},{id:'bakerloo',name:'Bakerloo'},{id:'hammersmith-city',name:'Hammersmith & City'},{id:'circle',name:'Circle'},{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUBST',zones:['1'],streetAddress:'Baker Street Station Marylebone Rd,London,NW1',icsCode:'1000011'},

    {name:'Balham',latitude:51.443288,longitude:-0.152997,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUBLM',zones:['3'],streetAddress:'Balham Underground Station,London Underground Ltd.,Balham High Rd,London,SW12 9BW',icsCode:'1000012'},


    {name:'Bank',latitude:51.513335,longitude:-0.088712,lines:[{id:'northern',name:'Northern'},{id:'central',name:'Central'},{id:'waterloo-city',name:'Waterloo & City'}],naptan:'940GZZLUBNK',zones:['1'],streetAddress:'Bank/Monument Complex,London Underground Ltd.,Princes St,London,EC3V 3LA',icsCode:'1000013'},

    {name:'Barbican',latitude:51.520275,longitude:-0.097993,lines:[{id:'hammersmith-city',name:'Hammersmith & City'},{id:'circle',name:'Circle'},{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUBBN',zones:['1'],streetAddress:'Barbican Station,London Underground Ltd.,Aldersgate St,London,EC1A 4JA',icsCode:'1000014'},

    {name:'Barking',latitude:51.539321,longitude:0.081053,lines:[{id:'district',name:'District'},{id:'hammersmith-city',name:'Hammersmith & City'}],naptan:'940GZZLUBKG',zones:['4'],streetAddress:'Barking Station BR Station Parade,Longbridge Rd,Barking,Essex,IG11 8TU',icsCode:'1000015'},

    {name:'Barkingside',latitude:51.585689,longitude:0.088585,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUBKE',zones:['4'],streetAddress:'Barkingside Station,London Underground Ltd.,Stn Rd,Barkingside,Milford,Essex,IG6 1NB',icsCode:'1000016'},

    {name:'Barons Court',latitude:51.490311,longitude:-0.213427,lines:[{id:'piccadilly',name:'Piccadilly'},{id:'circle',name:'Circle'},{id:'district',name:'District'}],naptan:'940GZZLUBSC',zones:['2'],streetAddress:'Barons Court Station,London Underground Ltd.,Pallister Rd,London,W14',icsCode:'1000017'},

    {name:'Bayswater',latitude:51.512284,longitude:-0.187938,lines:[{id:'district',name:'District'},{id:'circle',name:'Circle'}],naptan:'940GZZLUBWT',zones:['1'],streetAddress:'Bayswater Station,London Underground Ltd.,Queensway,London,W2 4RH',icsCode:'1000018'},

    {name:'Becontree',latitude:51.540331,longitude:0.127016,lines:[{id:'district',name:'District'}],naptan:'940GZZLUBEC',zones:['5'],streetAddress:'Becontree Station,London Underground Ltd.,Gale St,Dagenham,Essex,RM9 4TP',icsCode:'1000019'},

    {name:'Belsize Park',latitude:51.550311,longitude:-0.164648,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUBZP',zones:['2'],streetAddress:'Belsize Park Station,London Underground Ltd.,Haverstock Hill,London,NW3 2AL',icsCode:'1000020'},

    {name:'Bermondsey',latitude:51.497953,longitude:-0.063769,lines:[{id:'jubilee',name:'Jubilee'}],naptan:'940GZZLUBMY',zones:['2'],streetAddress:'Bermondsey Station,London Underground Ltd.,142 - 154 Jamaica Rd,London,SE16 4RX',icsCode:'1000021'},

    {name:'Bethnal Green',latitude:51.527222,longitude:-0.055506,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUBLG',zones:['2'],streetAddress:'Bethnal Green Underground Station,London Underground Ltd.,Cambridge Heath Rd,London,E2 0ET',icsCode:'1000022'},

    {name:'Blackfriars',latitude:51.511581,longitude:-0.103659,lines:[{id:'circle',name:'Circle'},{id:'district',name:'District'}],naptan:'940GZZLUBKF',zones:['1'],streetAddress:'Blackfriars Station,London Underground Ltd.,Blackfriars Road,London,EC4R 2BB',icsCode:'1000023'},

    {name:'Blackhorse Road',latitude:51.586919,longitude:-0.04115,lines:[{id:'victoria',name:'Victoria'}],naptan:'940GZZLUBLR',zones:['3'],streetAddress:'Blackhorse Road Underground Station,London Underground Ltd.,Blackhorse Rd,London,E17 6ND',icsCode:'1000024'},

    {name:'Bond Street',latitude:51.514304,longitude:-0.149723,lines:[{id:'jubilee',name:'Jubilee'},{id:'central',name:'Central'}],naptan:'940GZZLUBND',zones:['1'],streetAddress:'Bond Street Station,London Underground Ltd.,Oxford St,London,W1R 1FE',icsCode:'1000025'},

    {name:'Borough',latitude:51.501199,longitude:-0.09337,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUBOR',zones:['1'],streetAddress:'Borough Station,London Underground Ltd.,Borough High St,London,SE1 1JX',icsCode:'1000026'},

    {name:'Boston Manor',latitude:51.495635,longitude:-0.324939,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUBOS',zones:['4'],streetAddress:'Boston Manor Station,London Underground Ltd.,Boston Manor Rd,Brentford,Middx,TW8 9LQ',icsCode:'1000027'},

    {name:'Bounds Green',latitude:51.607034,longitude:-0.124235,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUBDS',zones:['3','4'],streetAddress:'Bounds Green Station,London Underground Ltd.,Bounds Green Rd,London,N11 2EU',icsCode:'1000028'},

    {name:'Bow Road',latitude:51.52694,longitude:-0.025128,lines:[{id:'district',name:'District'},{id:'hammersmith-city',name:'Hammersmith & City'}],naptan:'940GZZLUBWR',zones:['2'],streetAddress:'Bow Road Station,London Underground Ltd.,Bow Road,London,E3 4DH',icsCode:'1000029'},

    {name:'Brent Cross',latitude:51.57665,longitude:-0.213622,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUBTX',zones:['3'],streetAddress:'Brent Cross Station,London Underground Ltd.,Highfield Avenue,London,NW11 9UA',icsCode:'1000030'},

    {name:'Brixton',latitude:51.462618,longitude:-0.114888,lines:[{id:'victoria',name:'Victoria'}],naptan:'940GZZLUBXN',zones:['2'],streetAddress:'Brixton Underground Station,London Underground Ltd.,Brixton Rd,London,SW9 8HE',icsCode:'1000031'},

    {name:'Bromley-by-Bow',latitude:51.524839,longitude:-0.011538,lines:[{id:'district',name:'District'},{id:'hammersmith-city',name:'Hammersmith & City'}],naptan:'940GZZLUBBB',zones:['2','3'],streetAddress:'Bromley-By-Bow,London Underground Ltd.,Blackwell Tunnel Northern Approach,London,E3 3JJ',icsCode:'1000032'},

    {name:'Buckhurst Hill',latitude:51.626605,longitude:0.046757,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUBKH',zones:['5'],streetAddress:'Buckhurst Hill Station,London Underground Ltd.,Victoria Rd,Buckhurst Hill,Essex,IG9 5ET',icsCode:'1000033'},

    {name:'Burnt Oak',latitude:51.602774,longitude:-0.264048,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUBTK',zones:['4'],streetAddress:'Burnt Oak Station,London Underground Ltd.,Watling Avenue,Edgware,Middx,HA8 0LA',icsCode:'1000034'},

    {name:'Caledonian Road',latitude:51.548519,longitude:-0.118493,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUCAR',zones:['2'],streetAddress:'Caledonian Road Underground Station,London Underground Ltd.,Caledonian Rd,London,N7 9BA',icsCode:'1000035'},

    {name:'Camden Town',latitude:51.539292,longitude:-0.14274,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUCTN',zones:['2'],streetAddress:'Camden Town Station,London Underground Ltd.,Camden High St,London,NW1 8NH',icsCode:'1000036'},

    {name:'Canada Water',latitude:51.497945,longitude:-0.049722,lines:[{id:'jubilee',name:'Jubilee'}],naptan:'940GZZLUCWR',zones:['2'],streetAddress:'Canada Water Station,London Underground Ltd.,Deal Porter Way,Surrey Quays,London,SE16',icsCode:'1000037'},

    {name:'Canary Wharf',latitude:51.503488,longitude:-0.018246,lines:[{id:'jubilee',name:'Jubilee'}],naptan:'940GZZLUCYF',zones:['2'],streetAddress:'Canary Wharf Station,London Underground Ltd.,Heron Quays Road,Canary Wharf,London,E14 4HJ',icsCode:'1000038'},

    {name:'Canning Town',latitude:51.513584,longitude:0.008322,lines:[{id:'jubilee',name:'Jubilee'}],naptan:'940GZZLUCGT',zones:['2/3'],streetAddress:'Canning Town Station,London Underground Ltd.,Silvertown Way,Canning Town,London,E16 1DQ',icsCode:'1000039'},

    {name:'Cannon Street',latitude:51.51151,longitude:-0.090432,lines:[{id:'circle',name:'Circle'},{id:'district',name:'District'}],naptan:'940GZZLUCST',zones:['1'],streetAddress:'Cannon Street Underground Station,London Underground Ltd.,Cannon St,London,EC4N 6AP',icsCode:'1000040'},

    {name:'Canons Park',latitude:51.607701,longitude:-0.294693,lines:[{id:'jubilee',name:'Jubilee'}],naptan:'940GZZLUCPK',zones:['5'],streetAddress:'Canons Park Station,London Underground Ltd.,Whitchurch Lane,Edgware,Middx,HA8 6RN',icsCode:'1000041'},

    {name:'Chalfont and Latimer',latitude:51.667985,longitude:-0.560689,lines:[{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUCAL',zones:['8'],streetAddress:'Chalfont & Latimer Station,London Underground Ltd.,Station Approach,Little Chalfont,Amersham,Bucks,HP7 9PR',icsCode:'1000042'},

    {name:'Chalk Farm',latitude:51.544118,longitude:-0.153388,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUCFM',zones:['2'],streetAddress:'Chalk Farm Station,London Underground Ltd.,Adelaide Rd,London,NW3 2BP',icsCode:'1000043'},

    {name:'Chancery Lane',latitude:51.518247,longitude:-0.111583,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUCHL',zones:['1'],streetAddress:'Chancery Lane Station,London Underground Ltd.,High Holborn,London,WC1V 6DR',icsCode:'1000044'},

    {name:'Charing Cross',latitude:51.50741,longitude:-0.127277,lines:[{id:'bakerloo',name:'Bakerloo'},{id:'northern',name:'Northern'}],naptan:'940GZZLUCHX',zones:['1'],streetAddress:'Charing Cross Underground Station,London Underground Ltd.,Trafalgar Square,London,WC2N 5DR',icsCode:'1000045'},

    {name:'Chesham',latitude:51.705208,longitude:-0.611247,lines:[{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUCSM',zones:['9'],streetAddress:'Chesham Station,London Underground Ltd.,Station Approach,Chesham,Bucks,HP5 1DH',icsCode:'1000046'},

    {name:'Chigwell',latitude:51.617916,longitude:0.075041,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUCWL',zones:['4'],streetAddress:'Chigwell Station,London Underground Ltd.,Station Rd,Chigwell,Essex,IG7 6NT',icsCode:'1000047'},

    {name:'Chiswick Park',latitude:51.494627,longitude:-0.267972,lines:[{id:'district',name:'District'},{id:'circle',name:'Circle'}],naptan:'940GZZLUCWP',zones:['3'],streetAddress:'Chiswick Park Station,London Underground Ltd.,Bollo Lane,London,W4 5NE',icsCode:'1000048'},

    {name:'Chorleywood',latitude:51.654358,longitude:-0.518461,lines:[{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUCYD',zones:['7'],streetAddress:'Chorleywood Station,London Underground Ltd.,Station Approach,Chorleywood,Rickmansworth,Herts WD3 5ND',icsCode:'1000049'},

    {name:'Clapham Common',latitude:51.461742,longitude:-0.138317,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUCPC',zones:['2'],streetAddress:'Clapham Common Station,London Underground Ltd.,The Pavement,London,SW4 7AJ',icsCode:'1000050'},

    {name:'Clapham North',latitude:51.465135,longitude:-0.130016,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUCPN',zones:['2'],streetAddress:'Clapham North Station,London Underground Ltd.,Clapham High St,London,SW4 7TS',icsCode:'1000051'},

    {name:'Clapham South',latitude:51.452654,longitude:-0.147582,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUCPS',zones:['2','3'],streetAddress:'Clapham South Station,London Underground Ltd.,Balham Hill,London,SW12 9DU',icsCode:'1000052'},

    {name:'Cockfosters',latitude:51.65152,longitude:-0.149171,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUCKS',zones:['5'],streetAddress:'Cockfosters Station,London Underground Ltd.,Cockfosters Rd,Barnet,Herts,EN4 0DZ',icsCode:'1000053'},

    {name:'Colindale',latitude:51.595424,longitude:-0.249919,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUCND',zones:['4'],streetAddress:'Colindale Station,London Underground Ltd.,Colindale Avenue,London,NW9 5HR',icsCode:'1000054'},

    {name:'Colliers Wood',latitude:51.41816,longitude:-0.178086,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUCSD',zones:['3'],streetAddress:'Colliers Wood Station,London Underground Ltd.,Colliers Wood High St,London,SW19 2HR',icsCode:'1000055'},

    {name:'Covent Garden',latitude:51.513093,longitude:-0.124436,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUCGN',zones:['1'],streetAddress:'Covent Garden Station,London Underground Ltd.,Long Acre,London,WC2E 9JT',icsCode:'1000056'},

    {name:'Croxley',latitude:51.647044,longitude:-0.441718,lines:[{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUCXY',zones:['7'],streetAddress:'Croxley Station,London Underground Ltd.,Watford Road,Rickmansworth,Herts,WD3 3DY',icsCode:'1000057'},

    {name:'Dagenham East',latitude:51.544096,longitude:0.166017,lines:[{id:'district',name:'District'}],naptan:'940GZZLUDGE',zones:['5'],streetAddress:'Dagenham East Station,London Underground Ltd.,North Rainham Rd,Dagenham,Essex,RM10 8AA',icsCode:'1000058'},

    {name:'Dagenham Heathway',latitude:51.541639,longitude:0.147527,lines:[{id:'district',name:'District'}],naptan:'940GZZLUDGY',zones:['5'],streetAddress:'Dagenham Heathway Station,London Underground Ltd.,Heathway,Dagenham,Essex,RM9 5AN',icsCode:'1000059'},

    {name:'Debden',latitude:51.645386,longitude:0.083782,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUDBN',zones:['6'],streetAddress:'Debden Station,London Underground Ltd.,Chigwell Lane,Loughton,Essex,IG10 3TG',icsCode:'1000060'},

    {name:'Dollis Hill',latitude:51.551955,longitude:-0.239068,lines:[{id:'jubilee',name:'Jubilee'}],naptan:'940GZZLUDOH',zones:['3'],streetAddress:'Dollis Hill Station,London Underground Ltd.,Hamilton Rd,London,NW10 5NB',icsCode:'1000061'},

    {name:'Ealing Broadway',latitude:51.515017,longitude:-0.301457,lines:[{id:'district',name:'District'},{id:'circle',name:'Circle'},{id:'central',name:'Central'}],naptan:'940GZZLUEBY',zones:['3'],streetAddress:'Ealing Broadway Station,The Broadway,London,W5 2NU',icsCode:'1000062'},

    {name:'Ealing Common',latitude:51.51014,longitude:-0.288265,lines:[{id:'piccadilly',name:'Piccadilly'},{id:'district',name:'District'},{id:'circle',name:'Circle'}],naptan:'940GZZLUECM',zones:['3'],streetAddress:'Ealing Common Station,London Underground Ltd.,Uxbridge Rd,London,W5 3LD',icsCode:'1000063'},

    {name:'Earl\'s Court',latitude:51.492063,longitude:-0.193378,lines:[{id:'piccadilly',name:'Piccadilly'},{id:'district',name:'District'},{id:'circle',name:'Circle'}],naptan:'940GZZLUECT',zones:['1','2'],streetAddress:'Earl\'s Court Station,London Underground Ltd.,Earl\'s Court Rd,London,SW5 9QA',icsCode:'1000064'},

    {name:'East Acton',latitude:51.516612,longitude:-0.247248,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUEAN',zones:['2'],streetAddress:'East Acton Station,London Underground Ltd.,Erconwald St,London,W12 0BP',icsCode:'1000065'},

    {name:'East Finchley',latitude:51.587131,longitude:-0.165012,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUEFY',zones:['3'],streetAddress:'East Finchley Station,London Underground Ltd.,High Rd,London,N2 0NW',icsCode:'1000067'},

    {name:'East Ham',latitude:51.538948,longitude:0.051186,lines:[{id:'district',name:'District'},{id:'hammersmith-city',name:'Hammersmith & City'}],naptan:'940GZZLUEHM',zones:['3','4'],streetAddress:'East Ham Station,London Underground Ltd.,High Street North,London,E6 2JA',icsCode:'1000068'},

    {name:'East Putney',latitude:51.459205,longitude:-0.211,lines:[{id:'district',name:'District'}],naptan:'940GZZLUEPY',zones:['2','3'],streetAddress:'East Putney Station,Upper Richmond Rd,London,SW15',icsCode:'1000069'},

    {name:'Eastcote',latitude:51.576506,longitude:-0.397373,lines:[{id:'piccadilly',name:'Piccadilly'},{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUEAE',zones:['5'],streetAddress:'Eastcote Station,London Underground Ltd.,Field End Rd,Ruislip,Middx,HA5 1QZ',icsCode:'1000066'},


    {name:'Edgware',latitude:51.613653,longitude:-0.274928,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUEGW',zones:['5'],streetAddress:'Edgware Station,London Underground Ltd.,Station Rd,Edgware,Middx,HA8 7AW',icsCode:'1000070'},

    {name:'Edgware Road (Bakerloo)',latitude:51.520299,longitude:-0.17015,lines:[{id:'bakerloo',name:'Bakerloo'}],naptan:'940GZZLUERB',zones:['1'],streetAddress:'Edgware Road Bakerloo,London Underground Ltd.,Edgware Road,London,W2 1DY',icsCode:'1000071'},

    {name:'Edgware Road (Circle Line)',latitude:51.519858,longitude:-0.167832,lines:[{id:'circle',name:'Circle'},{id:'district',name:'District'},{id:'hammersmith-city',name:'Hammersmith & City'}],naptan:'940GZZLUERC',zones:['1'],streetAddress:'Edgware Road Circle,London Underground Ltd.,Chapel Street,London,NW1 5DH',icsCode:'1000072'},

    {name:'Elephant & Castle',latitude:51.494536,longitude:-0.100606,lines:[{id:'bakerloo',name:'Bakerloo'},{id:'northern',name:'Northern'}],naptan:'940GZZLUEAC',zones:['1','2'],streetAddress:'Elephant & Castle Underground Station,London Underground Ltd.,London Rd,London,SE1 6LW',icsCode:'1000073'},

    {name:'Elm Park',latitude:51.549775,longitude:0.19864,lines:[{id:'district',name:'District'}],naptan:'940GZZLUEPK',zones:['6'],streetAddress:'Elm Park Station,London Underground Ltd.,The Broadway,Hornchurch,Essex,RM12 4RW',icsCode:'1000074'},

    {name:'Embankment',latitude:51.507058,longitude:-0.122666,lines:[{id:'bakerloo',name:'Bakerloo'},{id:'district',name:'District'},{id:'circle',name:'Circle'},{id:'northern',name:'Northern'}],naptan:'940GZZLUEMB',zones:['1'],streetAddress:'Embankment Station,London Underground Ltd.,Villiers St,London,WC2N 6NS',icsCode:'1000075'},

    {name:'Epping',latitude:51.69368,longitude:0.113767,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUEPG',zones:['6'],streetAddress:'Epping Station,London Underground Ltd.,Station Rd,Epping,Essex,CM16 4HW',icsCode:'1000076'},

    {name:'Euston',latitude:51.528344,longitude:-0.1323,lines:[{id:'victoria',name:'Victoria'},{id:'northern',name:'Northern'}],naptan:'940GZZLUEUS',zones:['1'],streetAddress:'Euston Underground Station,London Underground Ltd.,Eversholt St,London,NW1 2DU',icsCode:'1000077'},

    {name:'Euston Square',latitude:51.525604,longitude:-0.135829,lines:[{id:'hammersmith-city',name:'Hammersmith & City'},{id:'circle',name:'Circle'},{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUESQ',zones:['1'],streetAddress:'Euston Square Station,London Underground Ltd.,Euston Rd,London,NW1 2BN',icsCode:'1000078'},

    {name:'Fairlop',latitude:51.595618,longitude:0.091004,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUFLP',zones:['4'],streetAddress:'Fairlop Station,London Underground Ltd.,Forest Rd,Ilford,Essex,IG6 3HD',icsCode:'1000079'},

    {name:'Farringdon',latitude: 51.520214,
    longitude: -0.105054,lines:[{id:'hammersmith-city',name:'Hammersmith & City'},{id:'circle',name:'Circle'},{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUFCN',zones:['1'],streetAddress:'Farringdon Station,London Underground Ltd.,Cowcross St,London,EC1M 6BY',icsCode:'1000080'},

    {name:'Finchley Central',latitude:51.600921,longitude:-0.192527,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUFYC',zones:['4'],streetAddress:'Finchley Central Station,London Underground Ltd.,Regents Park Road,London,N3 2RY',icsCode:'1000081'},

    {name:'Finchley Road',latitude:51.546825,longitude:-0.179845,lines:[{id:'jubilee',name:'Jubilee'},{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUFYR',zones:['2'],streetAddress:'Finchley Road Underground Station,London Underground Ltd.,Finchley Road,London,NW3 6OP',icsCode:'1000082'},

    {name:'Finsbury Park',latitude:51.564158,longitude:-0.106825,lines:[{id:'piccadilly',name:'Piccadilly'},{id:'victoria',name:'Victoria'}],naptan:'940GZZLUFPK',zones:['2'],streetAddress:'Finsbury Park Underground Station,London Underground Ltd.,Wells Terrace,London,N4 3JU',icsCode:'1000083'},

    {name:'Fulham Broadway',latitude:51.480081,longitude:-0.195422,lines:[{id:'district',name:'District'}],naptan:'940GZZLUFBY',zones:['2'],streetAddress:'Fulham Broadway Station,London Underground Ltd.,Fulham Broadway,London,SW6 1BY',icsCode:'1000084'},

    {name:'Gants Hill',latitude:51.576544,longitude:0.066185,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUGTH',zones:['4'],streetAddress:'Gants Hill Station,London Underground Ltd.,Cranbrook Rd,Ilford,Essex,IG2 6UD',icsCode:'1000085'},

    {name:'Gloucester Road',latitude:51.494316,longitude:-0.182658,lines:[{id:'piccadilly',name:'Piccadilly'},{id:'circle',name:'Circle'},{id:'district',name:'District'}],naptan:'940GZZLUGTR',zones:['1'],streetAddress:'Gloucester Road Station,London Underground Ltd.,Gloucester Rd,London,SW7 4SF',icsCode:'1000086'},

    {name:'Golders Green',latitude:51.572259,longitude:-0.194039,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUGGN',zones:['3'],streetAddress:'Golders Green Station,London Underground Ltd.,North End Rd,London,NW11 7RN',icsCode:'1000087'},

    {name:'Goldhawk Road',latitude:51.502005,longitude:-0.226715,lines:[{id:'circle',name:'Circle'},{id:'hammersmith-city',name:'Hammersmith & City'}],naptan:'940GZZLUGHK',zones:['2'],streetAddress:'Goldhawk Road Station,London Underground Ltd.,Goldhawk Rd,London,W12 8EG',icsCode:'1000088'},

    {name:'Goodge Street',latitude:51.520599,longitude:-0.134361,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUGDG',zones:['1'],streetAddress:'Goodge Street Station,London Underground Ltd.,75 Tottenham Court Rd,London,W1P 9PA',icsCode:'1000089'},

    {name:'Grange Hill',latitude:51.613378,longitude:0.092066,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUGGH',zones:['4'],streetAddress:'Grange Hill Station,London Underground Ltd.,Manor Rd,Chigwell,Essex IG7 5QB',icsCode:'1000090'},

    {name:'Great Portland Street',latitude:51.52384,longitude:-0.144262,lines:[{id:'hammersmith-city',name:'Hammersmith & City'},{id:'circle',name:'Circle'},{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUGPS',zones:['1'],streetAddress:'Great Portland Street Station,London Underground Ltd.,Euston Rd,London,NW1',icsCode:'1000091'},

    {name:'Greenford',latitude:51.542424,longitude:-0.34605,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUGFD',zones:['4'],streetAddress:'Greenford Station,London Underground Ltd.,Oldfield Lane,Greenford,Middx,UB6 8PX',icsCode:'1000092'},

    {name:'Green Park',latitude:51.506947,longitude:-0.142787,lines:[{id:'jubilee',name:'Jubilee'},{id:'piccadilly',name:'Piccadilly'},{id:'victoria',name:'Victoria'}],naptan:'940GZZLUGPK',zones:['1'],streetAddress:'Green Park Station,London Underground Ltd.,Piccadilly,London,W1J 9DZ',icsCode:'1000093'},

    {name:'Gunnersbury',latitude:51.491803,longitude:-0.275267,lines:[{id:'district',name:'District'}],naptan:'940GZZLUGBY',zones:['3'],streetAddress:'Gunnersbury,London Overground Ltd,Chiswick High Road,LONDON,W4 4AN',icsCode:'1000094'},

    {name:'Hainault',latitude:51.603659,longitude:0.093482,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUHLT',zones:['4'],streetAddress:'Hainault Station,London Underground Ltd.,New North Rd,Ilford,Essex,IG6 3BD',icsCode:'1000095'},

    {name:'Hammersmith (District and Piccadilly Line)',latitude:51.4923,longitude:-0.22362,lines:[{id:'piccadilly',name:'Piccadilly'},{id:'district',name:'District'},{id:'circle',name:'Circle'}],naptan:'940GZZLUHSD',zones:['2'],streetAddress:'Hammersmith (D & P),London Underground Ltd.,Hammersmith Broadway,London,W6 8AB',icsCode:'1000096'},

    {name:'Hammersmith (Hammersmith and City Line)',latitude:51.493172,longitude:-0.224177,lines:[{id:'circle',name:'Circle'},{id:'hammersmith-city',name:'Hammersmith & City'}],naptan:'940GZZLUHSC',zones:['2'],streetAddress:'Hammersmith (H & C),London Underground Ltd.,Beadon Road,London,W6 7AA',icsCode:'1000097'},

    {name:'Hampstead',latitude:51.556632,longitude:-0.178487,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUHTD',zones:['2','3'],streetAddress:'Hampstead Station,London Underground Ltd.,Hampstead High St,London,NW3 1QG',icsCode:'1000098'},

    {name:'Hanger Lane',latitude:51.530177,longitude:-0.292704,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUHGR',zones:['3'],streetAddress:'Hanger Lane Station,London Underground Ltd.,Hanger Lane,London,W5 1DL',icsCode:'1000099'},

    {name:'Harlesden',latitude:51.53631,longitude:-0.257883,lines:[{id:'bakerloo',name:'Bakerloo'}],naptan:'940GZZLUHSN',zones:['3'],streetAddress:'Harlesden,London Overground Ltd,Acton Lane,LONDON,NW10 7AA',icsCode:'1000100'},

    {name:'Harrow & Wealdstone',latitude:51.592268,longitude:-0.335217,lines:[{id:'bakerloo',name:'Bakerloo'}],naptan:'940GZZLUHAW',zones:['5'],streetAddress:'Harrow & Wealdstone,London Overground Ltd.,High Street,Harrow,HA3 5BP',icsCode:'1000101'},

    {name:'Harrow-on-the-Hill',latitude:51.579195,longitude:-0.337225,lines:[{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUHOH',zones:['5'], streetAddress: 'Station Rd, Harrow, HA1 1BB',icsCode:'1000102'},

    {name:'Hatton Cross',latitude:51.466747,longitude:-0.423191,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUHNX',zones:['5','6'],streetAddress:'Hatton Cross Station,London Underground Ltd.,Great South West Rd,Feltham,Middx,',icsCode:'1000103'},

    {name:'Heathrow Terminals 1-2-3 ',latitude:51.471235,longitude:-0.452265,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUHRC',zones:['6'],streetAddress:'Heathrow Terminals 1, 2, 3,London Underground Ltd.,Wellington Road,Hounslow,Middlesex,TW6 1JH',icsCode:'1000105'},

    {name:'Heathrow Terminal 4',latitude:51.458524,longitude:-0.445771,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUHR4',zones:['6'],streetAddress:'Heathrow T4 Station,London Underground Ltd.,Hthrw Airport Complex,Trmnl 4,Hounslow,Middx',icsCode:'1000104'},

    {name:'Heathrow Terminal 5',latitude:51.470052,longitude:-0.49056,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUHR5',zones:['6'],streetAddress:'Heathrow T5 Station,London Underground Ltd.,Hthrw Airport Complex,Trmnl 5,Hounslow,Middx',icsCode:'1016430'},

    {name:'Hendon Central',latitude:51.583301,longitude:-0.226424,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUHCL',zones:['3','4'],streetAddress:'Hendon Central Station,London Underground Ltd.,Queens Rd,London,NW4 3AS',icsCode:'1000106'},

    {name:'High Barnet',latitude:51.650541,longitude:-0.194298,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUHBT',zones:['5'],streetAddress:'High Barnet Station,London Underground Ltd.,Barnet Hill,Barnet,Herts,EN5 5RP',icsCode:'1000107'},

    {name:'Highbury and Islington',latitude:51.54502,longitude:-0.10752,lines:[{id:'victoria',name:'Victoria'}],naptan:'940GZZLUHAI',zones:['2'],streetAddress:'Highbury & Islington Underground Station, London ,Underground Ltd., Holloway Rd, London, N5 1RA',icsCode:'1000108'},

    {name:'High Street Kensington',latitude:51.501055,longitude:-0.192792,lines:[{id:'circle',name:'Circle'},{id:'district',name:'District'}],naptan:'940GZZLUHSK',zones:['1'],streetAddress:'High Street Kensington Station,London Underground Ltd.,Kensington High St,London,W8 5SA',icsCode:'1000110'},

    {name:'Highgate',latitude:51.577532,longitude:-0.145857,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUHGT',zones:['3'],streetAddress:'Highgate Station,London Underground Ltd.,Archway Rd,London,N6',icsCode:'1000109'},

    {name:'Hillingdon',latitude:51.553715,longitude:-0.449828,lines:[{id:'piccadilly',name:'Piccadilly'},{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUHGD',zones:['6'],streetAddress:'Hillingdon Station,London Underground Ltd.,Long Lane,Hillingdon,Uxbridge,Middlesex,UB10 9NR',icsCode:'1000111'},

    {name:'Holborn',latitude:51.51758,longitude:-0.120475,lines:[{id:'piccadilly',name:'Piccadilly'},{id:'central',name:'Central'}],naptan:'940GZZLUHBN',zones:['1'],streetAddress:'Holborn Station,London Underground Ltd.,Kingsway,London,WC2B 6AA',icsCode:'1000112'},

    {name:'Holland Park',latitude:51.507143,longitude:-0.205679,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUHPK',zones:['2'],streetAddress:'Holland Park Station,London Underground Ltd.,Holland Park Avenue,London,W11 3RB',icsCode:'1000113'},

    {name:'Holloway Road',latitude:51.552697,longitude:-0.113244,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUHWY',zones:['2'],streetAddress:'Holloway Road Station,London Underground Ltd.,Holloway Rd,London,N7 8HS',icsCode:'1000114'},

    {name:'Hornchurch',latitude:51.554093,longitude:0.219116,lines:[{id:'district',name:'District'}],naptan:'940GZZLUHCH',zones:['6'],streetAddress:'Hornchurch Station,London Underground Ltd.,Station Lane,Hornchurch,Essex,RM12 6LS',icsCode:'1000115'},

    {name:'Hounslow Central',latitude:51.471295,longitude:-0.366578,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUHWC',zones:['4'],streetAddress:'Hounslow Central Station,London Underground Ltd.,Lampton Rd,Hounslow,Middx,TW3 1JG',icsCode:'1000116'},

    {name:'Hounslow East',latitude:51.473213,longitude:-0.356474,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUHWE',zones:['4'],streetAddress:'Hounslow East Station,London Underground Ltd.,Kingsley Rd,Hounslow,Middx,TW3 4AB',icsCode:'1000117'},

    {name:'Hounslow West',latitude:51.473469,longitude:-0.386544,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUHWT',zones:['5'],streetAddress:'Hounslow West Station,London Underground Ltd.,Bath Rd,Hounslow,Middx,TW3 3DH',icsCode:'1000118'},

    {name:'Hyde Park Corner',latitude:51.503035,longitude:-0.152441,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUHPC',zones:['1'],streetAddress:'Hyde Park Corner Station,London Underground Ltd.,Knightsbridge,London,SW1X 7LY',icsCode:'1000119'},

    {name:'Ickenham',latitude:51.56177,longitude:-0.442225,lines:[{id:'piccadilly',name:'Piccadilly'},{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUICK',zones:['6'],streetAddress:'Ickenham Station,London Underground Ltd.,Glebe Avenue,Uxbridge,Middx,UB10 8PD',icsCode:'1000120'},

    {name:'Kennington',latitude:51.488337,longitude:-0.105963,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUKNG',zones:['2'],streetAddress:'Kennington Station,London Underground Ltd.,Kennington Park Rd,London,SE11 4QJ',icsCode:'1000121'},

    {name:'Kensal Green',latitude:51.530539,longitude:-0.225016,lines:[{id:'bakerloo',name:'Bakerloo'}],naptan:'940GZZLUKSL',zones:['2'],streetAddress:'Kensal Green,London Overground Ltd.,College Road,Kensal Green,HA10 5JT',icsCode:'1000122'},

    {name:'Kensington (Olympia)',latitude:51.497624,longitude:-0.210015,lines:[{id:'district',name:'District'}],naptan:'940GZZLUKOY',zones:['2'],streetAddress:'Kensington Olympia,Kensington Olympia Station,Olympia Way,LONDON,W14 0NE',icsCode:'1000170'},

    {name:'Kentish Town',latitude:51.550312,longitude:-0.140733,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUKSH',zones:['2'],streetAddress:'Kentish Town Underground Station,London Underground Ltd.,Kentish Town Rd,London,NW5 2AA',icsCode:'1000123'},

    {name:'Kenton',latitude:51.581756,longitude:-0.31691,lines:[{id:'bakerloo',name:'Bakerloo'}],naptan:'940GZZLUKEN',zones:['4'],streetAddress:'Kenton,London Overground Ltd.,Kenton Road,Harrow,HA3 0AZ',icsCode:'1000124'},

    {name:'Kew Gardens',latitude:51.477058,longitude:-0.285241,lines:[{id:'district',name:'District'}],naptan:'940GZZLUKWG',zones:['3','4'],streetAddress:'Kew Gardens Station,London Overground Ltd.,Station Approach,RICHMOND,TW9 3BZ',icsCode:'1000125'},

    {name:'Kilburn',latitude:51.546803,longitude:-0.204105,lines:[{id:'jubilee',name:'Jubilee'}],naptan:'940GZZLUKBN',zones:['2'],streetAddress:'Kilburn Station,London Underground Ltd.,Shootup Hill,London,NW6 7QL',icsCode:'1000126'},

    {name:'Kilburn Park',latitude:51.534979,longitude:-0.194232,lines:[{id:'bakerloo',name:'Bakerloo'}],naptan:'940GZZLUKPK',zones:['2'],streetAddress:'Kilburn Park Station,London Underground Ltd.,Cambridge Avenue,London,NW6 5AD',icsCode:'1000127'},

    {name:'King\'s Cross St. Pancras',latitude:51.530663,longitude:-0.123194,lines:[{id:'piccadilly',name:'Piccadilly'},{id:'victoria',name:'Victoria'},{id:'circle',name:'Circle'},{id:'hammersmith-city',name:'Hammersmith & City'},{id:'northern',name:'Northern'},{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUKSX',zones:['1'],streetAddress:'King\'s Cross St. Pancras,London Underground Ltd.,Euston Road,London,N1 9AL',icsCode:'1000129'},

    {name:'Kingsbury',latitude:51.584845,longitude:-0.27879,lines:[{id:'jubilee',name:'Jubilee'}],naptan:'940GZZLUKBY',zones:['4'],streetAddress:'Kingsbury Station,London Underground Ltd.,Kingsbury Rd,London,NW9 9EG',icsCode:'1000128'},

    {name:'Knightsbridge',latitude:51.501669,longitude:-0.160508,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUKNB',zones:['1'],streetAddress:'Knightsbridge Station,London Underground Ltd.,Sloane St,London,SW1',icsCode:'1000130'},

    {name:'Ladbroke Grove',latitude:51.517449,longitude:-0.210391,lines:[{id:'circle',name:'Circle'},{id:'hammersmith-city',name:'Hammersmith & City'}],naptan:'940GZZLULAD',zones:['2'],streetAddress:'Ladbroke Grove Station,London Underground Ltd.,Ladbroke Grove,London,W10 6HJ',icsCode:'1000131'},

    {name:'Lambeth North',latitude:51.498808,longitude:-0.112315,lines:[{id:'bakerloo',name:'Bakerloo'}],naptan:'940GZZLULBN',zones:['1'],streetAddress:'Lambeth North Station,London Underground Ltd.,110 Westminster Bridge Rd,London,SE1 7XG',icsCode:'1000132'},

    {name:'Lancaster Gate',latitude:51.511723,longitude:-0.175494,lines:[{id:'central',name:'Central'}],naptan:'940GZZLULGT',zones:['1'],streetAddress:'Lancaster Gate Station,London Underground Ltd.,Bayswater Rd,London,W2',icsCode:'1000133'},

    {name:'Latimer Road',latitude:51.513389,longitude:-0.217799,lines:[{id:'hammersmith-city',name:'Hammersmith & City'},{id:'circle',name:'Circle'}],naptan:'940GZZLULRD',zones:['2'],streetAddress:'Latimer Road Station,London Underground Ltd.,Bramley Rd,London,W10 6SZ',icsCode:'1000134'},

    {name:'Leicester Square',latitude:51.511386,longitude:-0.128426,lines:[{id:'piccadilly',name:'Piccadilly'},{id:'northern',name:'Northern'}],naptan:'940GZZLULSQ',zones:['1'],streetAddress:'Leicester Square Station,London Underground Ltd.,Cranbourn St,London,WC2H 0AP',icsCode:'1000135'},

    {name:'Leyton',latitude:51.556589,longitude:-0.005523,lines:[{id:'central',name:'Central'}],naptan:'940GZZLULYN',zones:['3'],streetAddress:'Leyton Underground Station,London Underground Ltd.,High Rd,Leyton,London,E10 5PS',icsCode:'1000136'},

    {name:'Leytonstone',latitude:51.568324,longitude:0.008194,lines:[{id:'central',name:'Central'}],naptan:'940GZZLULYS',zones:['3','4'],streetAddress:'Leytonstone Station,London Underground Ltd.,Church Lane,London,E11 1HE',icsCode:'1000137'},

    {name:'Liverpool Street',latitude:51.517372,longitude:-0.083182,lines:[{id:'hammersmith-city',name:'Hammersmith & City'},{id:'circle',name:'Circle'},{id:'metropolitan',name:'Metropolitan'},{id:'central',name:'Central'}],naptan:'940GZZLULVT',zones:['1'],streetAddress:'Liverpool Street Underground Station Central,London Underground Ltd.,Liverpool Street,London,EC2M 7PP',icsCode:'1000138'},

    {name:'London Bridge',latitude:51.505721,longitude:-0.088873,lines:[{id:'jubilee',name:'Jubilee'},{id:'northern',name:'Northern'}],naptan:'940GZZLULNB',zones:['1'],streetAddress:'London Bridge Underground Station,London Underground Ltd.,21 Duke St Hill,London,SE1 2SW',icsCode:'1000139'},

    {name:'Loughton',latitude:51.641443,longitude:0.055476,lines:[{id:'central',name:'Central'}],naptan:'940GZZLULGN',zones:['6'],streetAddress:'Loughton Station,London Underground Ltd.,Old Station Rd,Roding Rd,Loughton,Essex,IG10 4PD',icsCode:'1000140'},

    {name:'Maida Vale',latitude:51.529777,longitude:-0.185758,lines:[{id:'bakerloo',name:'Bakerloo'}],naptan:'940GZZLUMVL',zones:['2'],streetAddress:'Maida Vale Station,London Underground Ltd.,Elgin Avenue,London,W9 1JS',icsCode:'1000141'},

    {name:'Manor House',latitude:51.570738,longitude:-0.096118,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUMRH',zones:['2','3'],streetAddress:'Manor House Station,London Underground Ltd.,Green Lanes,London,N4 1BZ',icsCode:'1000142'},

    {name:'Mansion House',latitude:51.512117,longitude:-0.094009,lines:[{id:'district',name:'District'},{id:'circle',name:'Circle'}],naptan:'940GZZLUMSH',zones:['1'],streetAddress:'Mansion House Station,London Underground Ltd.,38 Cannon St,London,EC4N 6JD',icsCode:'1000143'},

    {name:'Marble Arch',latitude:51.513424,longitude:-0.158953,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUMBA',zones:['1'],streetAddress:'Marble Arch Station,London Underground Ltd.,Oxford St,London,W1C 1CX',icsCode:'1000144'},

    {name:'Marylebone',latitude:51.522322,longitude:-0.163207,lines:[{id:'bakerloo',name:'Bakerloo'}],naptan:'940GZZLUMYB',zones:['1'],streetAddress:'Marylebone Underground Station,London Underground Ltd.,Harewood Row,London,NW1 6JP',icsCode:'1000145'},

    {name:'Mile End',latitude:51.525122,longitude:-0.03364,lines:[{id:'district',name:'District'},{id:'hammersmith-city',name:'Hammersmith & City'},{id:'central',name:'Central'}],naptan:'940GZZLUMED',zones:['2'],streetAddress:'Mile End Station,London Underground Ltd.,Mile End Rd,London,E3 4DH',icsCode:'1000146'},

    {name:'Mill Hill East',latitude:51.608229,longitude:-0.209986,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUMHL',zones:['4'],streetAddress:'Mill Hill East Station,London Underground Ltd.,Bittacy Hill,London,NW7 1BS',icsCode:'1000147'},

    {name:'Monument',latitude:51.5107,longitude:-0.085969,lines:[{id:'district',name:'District'},{id:'circle',name:'Circle'}],naptan:'940GZZLUMMT',zones:['1'],streetAddress:'Monument Station,London Underground Ltd.,King William St,London,EC4R 9AA',icsCode:'1000148'},

    {name:'Moor Park',latitude:51.629845,longitude:-0.432454,lines:[{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUMPK',zones:['6','7'],streetAddress:'Moor Park Station,London Underground Ltd.,Sandy Lodge Lane,Rickmansworth,Herts,HA6 2JQ.',icsCode:'1000150'},

    {name:'Moorgate',latitude:51.518176,longitude:-0.088322,lines:[{id:'hammersmith-city',name:'Hammersmith & City'},{id:'circle',name:'Circle'},{id:'metropolitan',name:'Metropolitan'},{id:'northern',name:'Northern'}],naptan:'940GZZLUMGT',zones:['1'],streetAddress:'Moorgate Station,London Underground Ltd.,Moorfields,London,EC2Y 9AE',icsCode:'1000149'},

    {name:'Morden',latitude:51.402142,longitude:-0.194839,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUMDN',zones:['4'],streetAddress:'Morden Underground Station,London Underground Ltd.,London Rd,Morden,Surrey,SM4 5AZ',icsCode:'1000151'},

    {name:'Mornington Crescent',latitude:51.534679,longitude:-0.138789,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUMTC',zones:['2'],streetAddress:'Mornington Crescent Station,London Underground Ltd.,Eversholt St,London,NW1 2JA',icsCode:'1000152'},

    {name:'Neasden',latitude:51.553986,longitude:-0.249837,lines:[{id:'jubilee',name:'Jubilee'}],naptan:'940GZZLUNDN',zones:['3'],streetAddress:'Neasden Station,London Underground Ltd.,Neasden Lane,London,NW10 1PH',icsCode:'1000153'},

    {name:'Newbury Park',latitude:51.575726,longitude:0.090004,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUNBP',zones:['4'],streetAddress:'Newbury Park Station,London Underground Ltd.,Eastern Avenue,Ilford,Essex,IG2 7RN',icsCode:'1000154'},

    {name:'North Acton',latitude:51.523524,longitude:-0.259755,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUNAN',zones:['2','3'],streetAddress:'North Acton Station,London Underground Ltd.,Victoria Rd,London,W3 6UP',icsCode:'1000157'},

    {name:'North Ealing',latitude:51.517505,longitude:-0.288868,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUNEN',zones:['3'],streetAddress:'North Ealing Station,London Underground Ltd.,Station Road,London,W5 3AF',icsCode:'1000158'},

    {name:'North Greenwich',latitude:51.50047,longitude:0.004287,lines:[{id:'jubilee',name:'Jubilee'}],naptan:'940GZZLUNGW',zones:['2','3'],streetAddress:'North Greenwich Station,London Underground Ltd.,5 Millenium Way,London,SE10 0PH',icsCode:'1000160'},

    {name:'North Harrow',latitude:51.584872,longitude:-0.362408,lines:[{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUNHA',zones:['5'],streetAddress:'North Harrow Station,London Underground Ltd.,Station Rd,North Harrow,Middx,HA2 7SR',icsCode:'1000161'},

    {name:'North Wembley',latitude:51.562551,longitude:-0.304,lines:[{id:'bakerloo',name:'Bakerloo'}],naptan:'940GZZLUNWY',zones:['4'],streetAddress:'North Wembley,London Overground Ltd.,East Lane,Wembley,HA9 7NT',icsCode:'1000163'},

    {name:'Northfields',latitude:51.499319,longitude:-0.314719,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUNFD',zones:['3'],streetAddress:'Northfields Station,London Underground Ltd.,Northfield Avenue,London,W13 9QU',icsCode:'1000159'},

    {name:'Northolt',latitude:51.548236,longitude:-0.368699,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUNHT',zones:['5'],streetAddress:'Northolt Underground Station,London Underground Ltd.,Mandeville Rd,Northolt,Middx,UB5 4AA',icsCode:'1000162'},

    {name:'Northwick Park',latitude:51.578481,longitude:-0.318056,lines:[{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUNKP',zones:['4'],streetAddress:'Northwick Park Station,London Underground Ltd.,Northwick Avenue,Harrow,Middx,HA3 0AT',icsCode:'1000164'},

    {name:'Northwood',latitude:51.611053,longitude:-0.423829,lines:[{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUNOW',zones:['6'],streetAddress:'Northwood Station,London Underground Ltd.,Station Approach,Green Lane,Northwood,Middx,HA6 2XL',icsCode:'1000165'},

    {name:'Northwood Hills',latitude:51.600572,longitude:-0.409464,lines:[{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUNWH',zones:['6'],streetAddress:'Northwood Hills Station,London Underground Ltd.,Joel St,Northwood,Middx,HA6 1NZ',icsCode:'1000166'},

    {name:'Notting Hill Gate',latitude:51.509128,longitude:-0.196104,lines:[{id:'district',name:'District'},{id:'circle',name:'Circle'},{id:'central',name:'Central'}],naptan:'940GZZLUNHG',zones:['1','2'],streetAddress:'Notting Hill Gate Station,London Underground Ltd.,Notting Hill Gate,London,W11 3HT',icsCode:'1000167'},

    {name:'Oakwood',latitude:51.647726,longitude:-0.132182,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUOAK',zones:['5'],streetAddress:'Oakwood Station,London Underground Ltd.,Bramley Rd,London,N14 4UT',icsCode:'1000168'},

    {name:'Old Street',latitude:51.525864,longitude:-0.08777,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUODS',zones:['1'],streetAddress:'Old Street Station,London Underground Ltd.,Old St,London,EC1Y 1BE',icsCode:'1000169'},

    {name:'Osterley',latitude:51.481274,longitude:-0.352224,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUOSY',zones:['4'],streetAddress:'Osterley Station,London Underground Ltd.,Great West Rd,Isleworth,Middx,TW7 4PU',icsCode:'1000171'},

    {name:'Oval',latitude:51.48185,longitude:-0.112439,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUOVL',zones:['2'],streetAddress:'Oval Station,London Underground Ltd.,318 Kennington Park Rd,London,SE11 4PP',icsCode:'1000172'},

    {name:'Oxford Circus',latitude:51.515224,longitude:-0.141903,lines:[{id:'victoria',name:'Victoria'},{id:'bakerloo',name:'Bakerloo'},{id:'central',name:'Central'}],naptan:'940GZZLUOXC',zones:['1'],streetAddress:'Oxford Circus Station,London Underground Ltd.,Oxford St,London,W1B 3AG',icsCode:'1000173'},

    {name:'Paddington',latitude:51.516581,longitude:-0.175689,lines:[{id:'bakerloo',name:'Bakerloo'},{id:'circle',name:'Circle'},{id:'district',name:'District'}],naptan:'940GZZLUPAC',zones:['1'],streetAddress:'Paddington Underground Stations,London Underground Ltd.,Praed St,London,W2',icsCode:'1000174'},

    {name:'Paddington (Hammersmith and City Line)',latitude:51.518187,longitude:-0.178306,lines:[{id:'hammersmith-city',name:'Hammersmith & City'},{id:'circle',name:'Circle'}],naptan:'940GZZLUPAH',zones:['1'],icsCode:'1000175'},

    {name:'Park Royal',latitude:51.527123,longitude:-0.284341,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUPKR',zones:['3'],streetAddress:'Park Royal Station,London Underground Ltd.,Western Avenue,London,W5 3EL',icsCode:'1000176'},

    {name:'Parsons Green',latitude:51.475277,longitude:-0.20117,lines:[{id:'district',name:'District'}],naptan:'940GZZLUPSG',zones:['2'],streetAddress:'Parsons Green Station,London Underground Ltd.,Parsons Green Lane,London,SW6 4HS',icsCode:'1000177'},

    {name:'Perivale',latitude:51.536717,longitude:-0.323446,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUPVL',zones:['4'],streetAddress:'Perivale Station,London Underground Ltd.,Horsenden Lane,Greenford,Middx',icsCode:'1000178'},

    {name:'Piccadilly Circus',latitude:51.51005,longitude:-0.133798,lines:[{id:'piccadilly',name:'Piccadilly'},{id:'bakerloo',name:'Bakerloo'}],naptan:'940GZZLUPCC',zones:['1'],streetAddress:'Piccadilly Circus Station,London Underground Ltd.,Piccadilly Circus,London,W1J 9HP',icsCode:'1000179'},

    {name:'Pimlico',latitude:51.489097,longitude:-0.133761,lines:[{id:'victoria',name:'Victoria'}],naptan:'940GZZLUPCO',zones:['1'],streetAddress:'Pimlico Station,London Underground Ltd.,Bessborough St,London,SW1V 2JA',icsCode:'1000180'},

    {name:'Pinner',latitude:51.592901,longitude:-0.381161,lines:[{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUPNR',zones:['5'],streetAddress:'Pinner Station,London Underground Ltd.,Station Approach,Pinner,Middx,HA5 5LZ',icsCode:'1000181'},

    {name:'Plaistow',latitude:51.531341,longitude:0.017451,lines:[{id:'district',name:'District'},{id:'hammersmith-city',name:'Hammersmith & City'}],naptan:'940GZZLUPLW',zones:['3'],streetAddress:'Plaistow Station,London Underground Ltd.,Plaistow Rd,London,E15',icsCode:'1000182'},

    {name:'Preston Road',latitude:51.571972,longitude:-0.295107,lines:[{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUPRD',zones:['4'],streetAddress:'Preston Road Station,London Underground Ltd.,Preston Rd,Wembley,Middx,HA3 0PS',icsCode:'1000183'},

    {name:'Putney Bridge',latitude:51.468262,longitude:-0.208731,lines:[{id:'district',name:'District'}],naptan:'940GZZLUPYB',zones:['2'],streetAddress:'Putney Bridge Station,London Underground Ltd.,Station Approach,London,SW6 3UH',icsCode:'1000184'},

    {name:'Queen\'s Park',latitude:51.534158,longitude:-0.204574,lines:[{id:'bakerloo',name:'Bakerloo'}],naptan:'940GZZLUQPS',zones:['2'],streetAddress:'Queen\'s Park,London Overground Ltd.,Salusbury Road,London,NW6 6NL',icsCode:'1000186'},

    {name:'Queensbury',latitude:51.594188,longitude:-0.286219,lines:[{id:'jubilee',name:'Jubilee'}],naptan:'940GZZLUQBY',zones:['4'],streetAddress:'Queensbury Station,London Underground Ltd.,Cumberland Rd,Harrow,Middx,HA8 5NP',icsCode:'1000185'},

    {name:'Queensway',latitude:51.510312,longitude:-0.187152,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUQWY',zones:['1'],streetAddress:'Queensway Station,London Underground Ltd.,Bayswater Rd,London,W2 4SS',icsCode:'1000187'},

    {name:'Ravenscourt Park',latitude:51.494122,longitude:-0.235881,lines:[{id:'district',name:'District'},{id:'circle',name:'Circle'}],naptan:'940GZZLURVP',zones:['2'],streetAddress:'Ravenscourt Park Station,London Underground Ltd.,Ravenscourt Rd,London,W6 0UG',icsCode:'1000188'},

    {name:'Rayners Lane',latitude:51.575147,longitude:-0.371127,lines:[{id:'piccadilly',name:'Piccadilly'},{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLURYL',zones:['5'],streetAddress:'Rayners Lane Station,London Underground Ltd.,Alexandra Avenue,Harrow,HA5 5EG,Middx',icsCode:'1000189'},

    {name:'Redbridge',latitude:51.576243,longitude:0.04536,lines:[{id:'central',name:'Central'}],naptan:'940GZZLURBG',zones:['4'],streetAddress:'Redbridge Station,London Underground Ltd.,Eastern Avenue,Ilford,Essex,IG4 5DQ',icsCode:'1000190'},

    {name:'Regent\'s Park',latitude:51.523344,longitude:-0.146444,lines:[{id:'bakerloo',name:'Bakerloo'}],naptan:'940GZZLURGP',zones:['1'],streetAddress:'Regent\'s Park Station,London Underground Ltd.,Marylebone Rd,London,NW1 5HA',icsCode:'1000191'},

    {name:'Richmond',latitude:51.463237,longitude:-0.301336,lines:[{id:'district',name:'District'}],naptan:'940GZZLURMD',zones:['4'],streetAddress:'Richmond,London Underground Ltd.,The Quadrant,Richmond,TW9 1DN',icsCode:'1000192'},

    {name:'Rickmansworth',latitude:51.640207,longitude:-0.473703,lines:[{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLURKW',zones:['7'],streetAddress:'Rickmansworth Station,London Underground Ltd.,Station Approach,Rickmansworth,Herts,WD3 1QY',icsCode:'1000193'},

    {name:'Roding Valley',latitude:51.617199,longitude:0.043647,lines:[{id:'central',name:'Central'}],naptan:'940GZZLURVY',zones:['4'],streetAddress:'Roding Valley Station,London Underground Ltd.,Station Way,Buckhurst Hill,Essex,IG9 6LN',icsCode:'1000194'},

    {name:'Royal Oak',latitude:51.519113,longitude:-0.188748,lines:[{id:'hammersmith-city',name:'Hammersmith & City'},{id:'circle',name:'Circle'}],naptan:'940GZZLURYO',zones:['2'],streetAddress:'Royal Oak Station,London Underground Ltd.,Lord Hills Bridge,London,W2 6ET',icsCode:'1000196'},

    {name:'Ruislip',latitude:51.571354,longitude:-0.421898,lines:[{id:'piccadilly',name:'Piccadilly'},{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLURSP',zones:['6'],streetAddress:'Ruislip Station,London Underground Ltd.,Station Approach,Ruislip,Middx,HA4 8LD',icsCode:'1000197'},

    {name:'Ruislip Gardens',latitude:51.560736,longitude:-0.41071,lines:[{id:'central',name:'Central'}],naptan:'940GZZLURSG',zones:['5'],streetAddress:'Ruislip Gardens Station,London Underground Ltd.,West End Rd,Ruislip,Middx,HA4 6NF',icsCode:'1000198'},

    {name:'Ruislip Manor',latitude:51.573202,longitude:-0.412973,lines:[{id:'piccadilly',name:'Piccadilly'},{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLURSM',zones:['6'],streetAddress:'Ruislip Manor Station,London Underground Ltd.,Victoria Rd,Ruislip,Middx,HA4 9AA',icsCode:'1000199'},

    {name:'Russell Square',latitude:51.523073,longitude:-0.124285,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLURSQ',zones:['1'],streetAddress:'Russell Square Station,London Underground Ltd.,Bernard St,London,WC1N 1LJ',icsCode:'1000200'},

    {name:'St. James\'s Park',latitude:51.499544,longitude:-0.133608,lines:[{id:'district',name:'District'},{id:'circle',name:'Circle'}],naptan:'940GZZLUSJP',zones:['1'],streetAddress:'St. James\'s Park,London Underground Ltd.,Petty France,London,SW1H 0BD',icsCode:'1000221'},

    {name:'St. John\'s Wood',latitude:51.534521,longitude:-0.173948,lines:[{id:'jubilee',name:'Jubilee'}],naptan:'940GZZLUSJW',zones:['2'],streetAddress:'St. John\'s Wood,London Underground Ltd.,Wellington Road,London,NW8 6DN',icsCode:'1000222'},

    {name:'St. Paul\'s',latitude:51.514936,longitude:-0.097567,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUSPU',zones:['1'],streetAddress:'St. Paul\'s,London Underground Ltd.,Cheapside,London,EC1',icsCode:'1000225'},

    {name:'Seven Sisters',latitude:51.58333,longitude:-0.072584,lines:[{id:'victoria',name:'Victoria'}],naptan:'940GZZLUSVS',zones:['3'],streetAddress:'Seven Sisters Underground Station,London Underground Ltd.,Seven Sisters Rd,London',icsCode:'1000201'},

    {name:'Shepherd\'s Bush (Central)',latitude:51.504376,longitude:-0.218813,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUSBC',zones:['2'],streetAddress:'Shepherd\'s Bush Central,London Underground Ltd.,Uxbridge Road,London,W12 8ND',icsCode:'1000203'},

    {name:'Shepherd\'s Bush Market',latitude:51.505579,longitude:-0.226375,lines:[{id:'circle',name:'Circle'},{id:'hammersmith-city',name:'Hammersmith & City'}],naptan:'940GZZLUSBM',zones:['2'],streetAddress:'Shepherd\'s Bush Market,London Underground Ltd.,Uxbridge Road,London,W12 7JD',icsCode:'1000204'},

    {name:'Sloane Square',latitude:51.49227,longitude:-0.156377,lines:[{id:'district',name:'District'},{id:'circle',name:'Circle'}],naptan:'940GZZLUSSQ',zones:['1'],streetAddress:'Sloane Square Station,London Underground Ltd.,Sloane Square,London,SW1W 8BB',icsCode:'1000206'},

    {name:'Snaresbrook',latitude:51.580678,longitude:0.02144,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUSNB',zones:['4'],streetAddress:'Snaresbrook Station,London Underground Ltd.,Station Approach,London,E11 1QE',icsCode:'1000207'},

    {name:'South Ealing',latitude:51.501003,longitude:-0.307424,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUSEA',zones:['3'],streetAddress:'South Ealing Station,London Underground Ltd.,South Ealing Rd,London,W5 4QB',icsCode:'1000208'},

    {name:'South Harrow',latitude:51.564888,longitude:-0.352492,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUSHH',zones:['5'],streetAddress:'South Harrow Station,London Underground Ltd.,South Hill Ave,Harrow,Middx,HA2 8HN',icsCode:'1000211'},

    {name:'South Kensington',latitude:51.494094,longitude:-0.174138,lines:[{id:'piccadilly',name:'Piccadilly'},{id:'circle',name:'Circle'},{id:'district',name:'District'}],naptan:'940GZZLUSKS',zones:['1'],streetAddress:'South Kensington Station,London Underground Ltd.,Pelham St,London,SW7 2NB',icsCode:'1000212'},

    {name:'South Kenton',latitude:51.570232,longitude:-0.308433,lines:[{id:'bakerloo',name:'Bakerloo'}],naptan:'940GZZLUSKT',zones:['4'],streetAddress:'South Kenton,London Overground Ltd.,Windermere Road,Preston,HA9 8RD',icsCode:'1000213'},

    {name:'South Ruislip',latitude:51.556853,longitude:-0.398915,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUSRP',zones:['5'],streetAddress:'South Ruislip Station,London Underground Ltd.,Station Approach,Ruislip,Middx,HA4 6TP',icsCode:'1000214'},

    {name:'South Wimbledon',latitude:51.415309,longitude:-0.192005,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUSWN',zones:['3','4'],streetAddress:'South Wimbledon Station,London Underground Ltd.,High St,London,SW19 1DE',icsCode:'1000216'},

    {name:'South Woodford',latitude:51.591907,longitude:0.027338,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUSWF',zones:['4'],streetAddress:'South Woodford Station,London Underground Ltd.,George Lane,London,E18 1JJ',icsCode:'1000217'},

    {name:'Southfields',latitude:51.445073,longitude:-0.206602,lines:[{id:'district',name:'District'}],naptan:'940GZZLUSFS',zones:['3'],streetAddress:'Southfields Station,Wimbledon Park Rd,London,SW18',icsCode:'1000209'},

    {name:'Southgate',latitude:51.632315,longitude:-0.127816,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUSGT',zones:['4'],streetAddress:'Southgate Station,London Underground Ltd.,High St,London,N14',icsCode:'1000210'},

    {name:'Southwark',latitude:51.503976,longitude:-0.10494,lines:[{id:'jubilee',name:'Jubilee'}],naptan:'940GZZLUSWK',zones:['1'],streetAddress:'Southwark Station,London Underground Ltd.,68 - 70 Blackfriars Rd,London,SE1 8JZ',icsCode:'1000215'},

    {name:'Stamford Brook',latitude:51.494917,longitude:-0.245704,lines:[{id:'district',name:'District'},{id:'circle',name:'Circle'}],naptan:'940GZZLUSFB',zones:['2'],streetAddress:'Stamford Brook Station,London Underground Ltd.,Goldhawk Rd,London,W6',icsCode:'1000218'},

    {name:'Stanmore',latitude:51.619839,longitude:-0.303266,lines:[{id:'jubilee',name:'Jubilee'}],naptan:'940GZZLUSTM',zones:['5'],streetAddress:'Stanmore Station,London Underground Ltd.,London Rd,Stanmore,Middx,HA7 4PD',icsCode:'1000219'},

    {name:'Stepney Green',latitude:51.521858,longitude:-0.046596,lines:[{id:'district',name:'District'},{id:'hammersmith-city',name:'Hammersmith & City'}],naptan:'940GZZLUSGN',zones:['2'],streetAddress:'Stepney Green Station,London Underground Ltd.,Mile End Rd,London,E1 4AQ',icsCode:'1000220'},

    {name:'Stockwell',latitude:51.472184,longitude:-0.122644,lines:[{id:'victoria',name:'Victoria'},{id:'northern',name:'Northern'}],naptan:'940GZZLUSKW',zones:['2'],streetAddress:'Stockwell Station,London Underground Ltd.,Clapham Rd,London,SW9 9AE',icsCode:'1000223'},

    {name:'Stonebridge Park',latitude:51.543959,longitude:-0.275892,lines:[{id:'bakerloo',name:'Bakerloo'}],naptan:'940GZZLUSGP',zones:['3'],streetAddress:'Stonebridge Park,London Overground Ltd.,North Circular Road,London,NW10 0RL',icsCode:'1000224'},

    {name:'Stratford',latitude:51.541806,longitude:-0.003458,lines:[{id:'jubilee',name:'Jubilee'},{id:'central',name:'Central'}],naptan:'940GZZLUSTD',zones:['2/3'],streetAddress:'Stratford Station BR Station St,London,E15 1DE',icsCode:'1000226'},

    {name:'Sudbury Hill',latitude:51.556946,longitude:-0.336435,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUSUH',zones:['4'],streetAddress:'Sudbury Hill Underground Station,London Underground Ltd.,Greenford Rd,Harrow,Middx,HA1 3RA',icsCode:'1000227'},

    {name:'Sudbury Town',latitude:51.550815,longitude:-0.315745,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUSUT',zones:['4'],streetAddress:'Sudbury Town Station,London Underground Ltd.,Station Approach,Wembley,Middx,HA0 2LA',icsCode:'1000228'},

    {name:'Swiss Cottage',latitude:51.543681,longitude:-0.174894,lines:[{id:'jubilee',name:'Jubilee'}],naptan:'940GZZLUSWC',zones:['2'],streetAddress:'Swiss Cottage Station,London Underground Ltd.,Finchley Rd,London,NW3 6HY',icsCode:'1000230'},

    {name:'Temple',latitude:51.511006,longitude:-0.11426,lines:[{id:'circle',name:'Circle'},{id:'district',name:'District'}],naptan:'940GZZLUTMP',zones:['1'],streetAddress:'Temple Station,London Underground Ltd.,Victoria Embankment,London,WC2R 2PH',icsCode:'1000231'},

    {name:'Theydon Bois',latitude:51.671759,longitude:0.103085,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUTHB',zones:['6'],streetAddress:'Theydon Bois Station,London Underground Ltd.,Coppice Row,Theydon Bois,Essex,CM16 7EU',icsCode:'1000232'},

    {name:'Tooting Bec',latitude:51.435678,longitude:-0.159736,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUTBC',zones:['3'],streetAddress:'Tooting Bec Station,London Underground Ltd.,Balham High Rd,London,SW17 9AH',icsCode:'1000233'},

    {name:'Tooting Broadway',latitude:51.42763,longitude:-0.168374,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUTBY',zones:['3'],streetAddress:'Tooting Broadway Station,London Underground Ltd.,Tooting High St,London,SW17 0SU',icsCode:'1000234'},

    {name:'Tottenham Court Road',latitude:51.516426,longitude:-0.13041,lines:[{id:'central',name:'Central'},{id:'northern',name:'Northern'}],naptan:'940GZZLUTCR',zones:['1'],streetAddress:'Tottenham Court Road Station,London Underground Ltd.,Oxford St,London,W1',icsCode:'1000235'},

    {name:'Tottenham Hale',latitude:51.588108,longitude:-0.060241,lines:[{id:'victoria',name:'Victoria'}],naptan:'940GZZLUTMH',zones:['3'],streetAddress:'Tottenham Hale Underground Station,London Underground Ltd.,Station Rd,London,N17 9LR',icsCode:'1000236'},

    {name:'Totteridge and Whetstone',latitude:51.630597,longitude:-0.17921,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUTAW',zones:['4'],streetAddress:'Totteridge & Whetstone Station,London Underground Ltd.,Totteridge Lane,London,N20 9QP',icsCode:'1000237'},

    {name:'Tower Hill',latitude:51.509971,longitude:-0.076546,lines:[{id:'circle',name:'Circle'},{id:'district',name:'District'}],naptan:'940GZZLUTWH',zones:['1'],streetAddress:'Tower Hill Station,London Underground Ltd.,Trinity Square,London,EC3N 4DJ',icsCode:'1000238'},

    {name:'Tufnell Park',latitude:51.556822,longitude:-0.138433,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUTFP',zones:['2'],streetAddress:'Tufnell Park Station,London Underground Ltd.,Fortess Rd,London,N19 5QB',icsCode:'1000239'},

    {name:'Turnham Green',latitude:51.495148,longitude:-0.254555,lines:[{id:'piccadilly',name:'Piccadilly'},{id:'circle',name:'Circle'},{id:'district',name:'District'}],naptan:'940GZZLUTNG',zones:['2'],streetAddress:'Turnham Green Station,London Underground Ltd.,Turnham Green Terrace,London,W4 1LR',icsCode:'1000240'},

    {name:'Turnpike Lane',latitude:51.590272,longitude:-0.102953,lines:[{id:'piccadilly',name:'Piccadilly'}],naptan:'940GZZLUTPN',zones:['3'],streetAddress:'Turnpike Lane Station,London Underground Ltd.,Westbury Avenue,London,N15 3NX',icsCode:'1000241'},

    {name:'Upminster',latitude:51.559063,longitude:0.250882,lines:[{id:'district',name:'District'}],naptan:'940GZZLUUPM',zones:['6'],streetAddress:'Upminster Station NR Station Rd,Upminster,Essex,RM14 2TD',icsCode:'1000242'},

    {name:'Upminster Bridge',latitude:51.55856,longitude:0.235809,lines:[{id:'district',name:'District'}],naptan:'940GZZLUUPB',zones:['6'],streetAddress:'Upminster Bridge Station,London Underground Ltd.,Upminster Rd,Hornchurch,Essex,RM12 6PL',icsCode:'1000243'},

    {name:'Upney',latitude:51.538372,longitude:0.10153,lines:[{id:'district',name:'District'}],naptan:'940GZZLUUPY',zones:['4'],streetAddress:'Upney Station,London Underground Ltd.,Upney Lane,Barking,Essex,IG11 9LS',icsCode:'1000244'},

    {name:'Upton Park',latitude:51.53534,longitude:0.035263,lines:[{id:'district',name:'District'},{id:'hammersmith-city',name:'Hammersmith & City'}],naptan:'940GZZLUUPK',zones:['3'],streetAddress:'Upton Park Station,London Underground Ltd.,Green St,London,E13 9AP',icsCode:'1000245'},

    {name:'Uxbridge',latitude:51.546565,longitude:-0.477949,lines:[{id:'piccadilly',name:'Piccadilly'},{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUUXB',zones:['6'],streetAddress:'Uxbridge Station,London Underground Ltd.,High St,Uxbridge,Middx,UB8 1JZ',icsCode:'1000246'},

    {name:'Vauxhall',latitude:51.485743,longitude:-0.124204,lines:[{id:'victoria',name:'Victoria'}],naptan:'940GZZLUVXL',zones:['1','2'],streetAddress:'Vauxhall Underground Station,London Underground Ltd.,Vauxhall Cross,London,SE1',icsCode:'1000247'},

    {name:'Victoria',latitude:51.496359,longitude:-0.143102,lines:[{id:'victoria',name:'Victoria'},{id:'district',name:'District'},{id:'circle',name:'Circle'}],naptan:'940GZZLUVIC',zones:['1'],streetAddress:'Victoria Underground Station,London Underground Ltd.,Victoria St,London,SW1E 5ND',icsCode:'1000248'},

    {name:'Walthamstow Central',latitude:51.582965,longitude:-0.019885,lines:[{id:'victoria',name:'Victoria'}],naptan:'940GZZLUWWL',zones:['3'],streetAddress:'Walthamstow Central Station BR Hoe St,London,E17 7LP',icsCode:'1000249'},

    {name:'Wanstead',latitude:51.575501,longitude:0.028527,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUWSD',zones:['4'],streetAddress:'Wanstead Underground Station,London Underground Ltd.,The Green,London,E11 2NT',icsCode:'1000250'},

    {name:'Warren Street',latitude:51.524951,longitude:-0.138321,lines:[{id:'victoria',name:'Victoria'},{id:'northern',name:'Northern'}],naptan:'940GZZLUWRR',zones:['1'],streetAddress:'Warren Street Station,London Underground Ltd.,Tottenham Court Rd,London,NW1 3AA',icsCode:'1000252'},

    {name:'Warwick Avenue',latitude:51.523263,longitude:-0.183783,lines:[{id:'bakerloo',name:'Bakerloo'}],naptan:'940GZZLUWKA',zones:['2'],streetAddress:'Warwick Avenue Station,London Underground Ltd.,Warwick Avenue,London,W9 2PT',icsCode:'1000253'},

    {name:'Waterloo',latitude:51.503299,longitude:-0.11478,lines:[{id:'jubilee',name:'Jubilee'},{id:'bakerloo',name:'Bakerloo'},{id:'waterloo-city',name:'Waterloo & City'},{id:'northern',name:'Northern'}],naptan:'940GZZLUWLO',zones:['1'],streetAddress:'Waterloo Underground Station,London Underground Ltd.,York Rd,London,SE1 7ND',icsCode:'1000254'},

    {name:'Watford',latitude:51.657446,longitude:-0.417377,lines:[{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUWAF',zones:['7'],streetAddress:'Watford Station,London Underground Ltd.,Cassiobury Park Avenue,Watford,Herts,WD18 7LE',icsCode:'1000255'},

    {name:'Wembley Central',latitude:51.552304,longitude:-0.296852,lines:[{id:'bakerloo',name:'Bakerloo'}],naptan:'940GZZLUWYC',zones:['4'],streetAddress:'Wembley Central,London Overground Ltd.,High Road,Wembley,HA9 7AJ',icsCode:'1000256'},

    {name:'Wembley Park',latitude:51.563198,longitude:-0.279262,lines:[{id:'jubilee',name:'Jubilee'},{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUWYP',zones:['4'],streetAddress:'Wembley Park Station,London Underground Ltd.,Bridge Road,Wembley,Middlesex,HA9 9AA',icsCode:'1000257'},

    {name:'West Acton',latitude:51.518001,longitude:-0.28098,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUWTA',zones:['3'],streetAddress:'West Acton Station,London Underground Ltd.,Princes Gardens,London,W3 0LG',icsCode:'1000258'},

    {name:'West Brompton',latitude:51.487268,longitude:-0.195599,lines:[{id:'district',name:'District'}],naptan:'940GZZLUWBN',zones:['2'],streetAddress:'West Brompton Station,London Underground Ltd.,Old Brompton Rd,London,SW5 9JX',icsCode:'1000260'},

    {name:'West Finchley',latitude:51.609426,longitude:-0.188362,lines:[{id:'northern',name:'Northern'}],naptan:'940GZZLUWFN',zones:['4'],streetAddress:'West Finchley Station,London Underground Ltd.,Nether Street,London,N3 1NT',icsCode:'1000261'},

    {name:'West Ham',latitude:51.528136,longitude:0.005055,lines:[{id:'jubilee',name:'Jubilee'},{id:'district',name:'District'},{id:'hammersmith-city',name:'Hammersmith & City'}],naptan:'940GZZLUWHM',zones:['2/3'],streetAddress:'West Ham Underground Station,London Underground Ltd.,Manor Rd,London,E15 3BN',icsCode:'1000262'},

    {name:'West Hampstead',latitude:51.546638,longitude:-0.191059,lines:[{id:'jubilee',name:'Jubilee'}],naptan:'940GZZLUWHP',zones:['2'],streetAddress:'West Hampstead Underground Station,London Underground Ltd.,West End Lane,London,NW6 2LS',icsCode:'1000263'},

    {name:'West Harrow',latitude:51.57971,longitude:-0.3534,lines:[{id:'metropolitan',name:'Metropolitan'}],naptan:'940GZZLUWHW',zones:['5'],streetAddress:'West Harrow Station,London Underground Ltd.,Vaughan Rd,Harrow,Middx,HA1 4HE',icsCode:'1000264'},

    {name:'West Kensington',latitude:51.490459,longitude:-0.206636,lines:[{id:'district',name:'District'},{id:'circle',name:'Circle'}],naptan:'940GZZLUWKN',zones:['2'],streetAddress:'West Kensington Station,London Underground Ltd.,North End Rd,London,W14 9NL',icsCode:'1000265'},

    {name:'West Ruislip',latitude:51.569688,longitude:-0.437886,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUWRP',zones:['6'],streetAddress:'West Ruislip Station,London Underground Ltd.,Ickenham Rd,West Ruislip,Middlesex',icsCode:'1000267'},

    {name:'Westbourne Park',latitude:51.52111,longitude:-0.201065,lines:[{id:'circle',name:'Circle'},{id:'hammersmith-city',name:'Hammersmith & City'}],naptan:'940GZZLUWSP',zones:['2'],streetAddress:'Westbourne Park Station,London Underground Ltd.,Western Rd,London,W11 1AB',icsCode:'1000259'},

    {name:'Westminster',latitude:51.50132,longitude:-0.124861,lines:[{id:'jubilee',name:'Jubilee'},{id:'district',name:'District'},{id:'circle',name:'Circle'}],naptan:'940GZZLUWSM',zones:['1'],streetAddress:'Westminster Station,London Underground Ltd.,Bridge St,London,SW1A 2JR',icsCode:'1000266'},

    {name:'White City',latitude:51.511959,longitude:-0.224297,lines:[{id:'central',name:'Central'}],naptan:'940GZZLUWCY',zones:['2'],streetAddress:'White City Station,London Underground Ltd.,Wood Lane,London,W12 7RH',icsCode:'1000269'},

    {name: 'Whitechapel',
    latitude: 51.519518,
    longitude: -0.059971,
    lines: [
      {id:'district', name: 'District'},
      {id:'hammersmith-city',name: 'Hammersmith & City'}],
      naptan: '940GZZLUWPL',
      zones: ['2'],
    streetAddress: 'Whitechapel Station,London Underground Ltd., 277 Whitechapel Rd, London, E1 1BY',
    icsCode: '1000268'},

    {name: 'Willesden Green',
    latitude: 51.549146,
    longitude:-0.221537,
    lines: [
      {id:'jubilee',name:'Jubilee'},
      {id:'metropolitan', name: 'Metropolitan'}
    ],
    naptan: '940GZZLUWIG',
    zones: ['2', '3'],
    streetAddress: 'Willesden Green Station,London Underground Ltd., Walm Lane, London, NW2 4QT',
    icsCode:'1000270'},

    {name: 'Willesden Junction',
    latitude: 51.532259,
    longitude: -0.244283,
    lines: [
      {id:'bakerloo',name: 'Bakerloo'}],
      naptan: '940GZZLUWJN',
      zones:['2','3'],
      streetAddress: 'Willesden Junction, London Overground Ltd., Station Approach, Harlesden,NW10 4UY',
      icsCode: '1000271'},

    {name: 'Wimbledon',
    latitude: 51.421207,
    longitude: -0.206573,
    lines: [
      {id: 'district', name: 'District'}
    ],
    naptan: '940GZZLUWIM',
    zones: ['3'],
    streetAddress: 'Wimbledon, London Underground Ltd., The Broadway, London, SW19 7NL',
    icsCode: '1000272'},

    {name: 'Wimbledon Park',
    latitude: 51.434573,
    longitude: -0.199719,
    lines: [
      {id:'district',name:'District'}
    ],
    naptan: '940GZZLUWIP',
    zones: ['3'],
    streetAddress: 'Wimbledon Park Station, Arthur Rd, London, SW19 ',
    icsCode: '1000273'},

    {name: 'Wood Green',
    latitude: 51.597479,
    longitude: -0.109886,
    lines: [
      {id: 'piccadilly', name: 'Piccadilly'}
    ],
    naptan: '940GZZLUWOG',
    zones:  ['3'],
    streetAddress: 'Wood Green Station, London Underground Ltd., High Rd, Wood Green, London, N22 4HH',
    icsCode:'1000275'},

    {name: 'Wood Lane',
    latitude: 51.509669,
    longitude: -0.22453,
    lines: [
      {id: 'circle',name: 'Circle'},
      {id:'hammersmith-city', name: 'Hammersmith & City'}
    ],
    naptan:'940GZZLUWLA',
    zones: ['2'],
    streetAddress: 'Wood Lane Station, London Underground Ltd., Wood Lane, London,',
    icsCode:'1000278'},

    {name: 'Woodford',
    latitude: 51.606899,
    longitude: 0.03397,
    lines: [
      {id: 'central', name: 'Central'}
    ],
    naptan: '940GZZLUWOF',
    zones: ['4'],
    streetAddress: 'Woodford Station, London Underground Ltd., Snakes Lane, Woodford Green, Essex',
    icsCode: '1000274'},

    {name: 'Woodside Park',
    latitude: 51.618014,
    longitude: -0.18542,
    lines: [
      {id: 'northern', name: 'Northern'}],
    naptan: '940GZZLUWOP',
    zones:['4'],
    streetAddress: 'Woodside Park Station, London Underground Ltd., Woodside Park Rd, London, N12 8SE',
    icsCode: '1000276'},

    ]);
  })
  .then((stations) => {
    console.log(`${stations.length} stations created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
