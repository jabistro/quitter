from sqlalchemy import null
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    # 1
    demo = User(
        username='Demo22',
        email='demo@aa.io',
        password='password',
        header='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCiDIvq5FTSSx7LwmyY7ezDjL0I43N9AJxQ&usqp=CAU',
        profile_pic='https://lifevsfilm.files.wordpress.com/2013/09/demolitionman14.jpg',
        display_name='Demo Lition',
        bio="Evil crime lord Simon Phoenix. Cryogenically frozen in 1996. Thawed for a parole hearing in 2032, but I escaped. I've been addicted to committing crime.",
        location='San Angeles, CA',
        birthday='1962-07-31',
        joined='2016-09-03 19:17:22')
    # 2
    marnie = User(
        username='marnie79',
        email='marnie@aa.io',
        password='password',
        header='https://64.media.tumblr.com/e0ab4934a49403b5d8a64692863870f8/bf8867182e2bad08-96/s1280x1920/9db94b7889dcf8fea0da4f791e74a37eeed14096.jpg',
        profile_pic='https://queensroaddental.co.uk/wp-content/uploads/2015/07/Marni.jpg',
        display_name='Marnie Alexander',
        bio='Recovering alcoholic. Love my family, proud mother. Taking it one day at a time.',
        location='Raleigh, NC',
        birthday='1979-02-17',
        joined='2017-10-03 19:17:22')
    # 3
    bobbie = User(
        username='HelicopterBobbie',
        email='bobbie@aa.io',
        password='password',
        header='https://moegamer.files.wordpress.com/2017/08/the-helicopter-header.png?w=672&h=372&crop=1',
        profile_pic='https://e7.pngegg.com/pngimages/85/941/png-clipart-troll-face-illustration-lol-guy-people-troll-face-thumbnail.png',
        display_name='Bobbie Bogay 🚁',
        bio="Jeff's #1 fan. Recovering zoom crasher. Fighting the urge to troll, but it's tough.",
        location='New York City, NY',
        birthday='1996-05-28',
        joined='2009-01-03 19:17:22')
    # 4
    john_allan = User(
        username='JABistro',
        email='info@johnallanhinds.com',
        password='password',
        header='https://pbs.twimg.com/profile_banners/326835342/1559881342/600x200',
        profile_pic='https://pbs.twimg.com/profile_images/1349201944376700928/bDUxYtla_400x400.jpg',
        display_name='John Allan Hinds 🌌🤓',
        bio='Mostly known as Bistro, occasionally known as bloop. Professional poker player, unfortunately.',
        location='Fort Lee, NJ/Greenville, NC/LV',
        birthday='1987-06-03',
        joined='2011-04-03 19:17:22')
    # 5
    lebron = User(
        username='KingJames',
        email='lebron@mail.com',
        password='password',
        header='https://pbs.twimg.com/profile_banners/23083404/1529843462/1500x500',
        profile_pic='https://pbs.twimg.com/profile_images/1421530540063092736/xqtcu8HX_400x400.jpg',
        display_name='LeBron James',
        bio="EST. AKRON - ST.V/M Class of '03 http://LeBronJamesFamilyFoundation.org #IPROMISE",
        location='Amongst La Familia!',
        birthday='1984-12-30',
        joined='2006-07-03 19:17:22')
    # 6
    zach = User(
        username='RealZachGalifianakis',
        email='zach@mail.com',
        password='password',
        header='https://pbs.twimg.com/media/DfqUFgcW0AAaCje.jpg',
        profile_pic='https://image1.commarts.com/images1/5/9/8/2/289506_102_600_LTE5OTU0NjA0MzItNTU1MDU0MTY0_f.jpg',
        display_name='Zach Galifianakis',
        bio='I was addicted to cold turkey for 14 years',
        location='Saskatoon, Saskatchewan Canada',
        birthday='1969-10-01',
        joined='2012-04-03 19:17:22')
    # 7
    steve_o = User(
        username='steveo',
        email='steveo@mail.com',
        password='password',
        header='https://pbs.twimg.com/profile_banners/208711264/1564455532/1500x500',
        profile_pic='https://pbs.twimg.com/profile_images/1134320923270455297/GqANJyOi_400x400.jpg',
        display_name='Steve-O',
        bio='steveo.com',
        location='Los Angeles, CA',
        birthday='1974-06-13',
        joined='2012-11-03 19:17:22')
    # 8
    robert = User(
        username='RobertDowneyJr',
        email='robert@mail.com',
        password='password',
        header='https://pbs.twimg.com/profile_banners/47786101/1625158674/1500x500',
        profile_pic='https://pbs.twimg.com/profile_images/1353806309397655553/0zEtkDvx_400x400.jpg',
        display_name='Robert Downey Jr',
        bio='You know who I am.',
        location='New York City, NY',
        birthday='1965-04-04',
        joined='2009-06-03 19:17:22')
    # 9
    ben = User(
        username='BenAffleck',
        email='ben@mail.com',
        password='password',
        header='https://pbs.twimg.com/profile_banners/329746058/1349207677/1500x500',
        profile_pic='https://pbs.twimg.com/profile_images/3782523511/fc6c9a4523187aaf21d31c354f3a5638_400x400.jpeg',
        display_name='Ben Affleck',
        bio='Actor, Writer, Director & Producer ',
        location='Los Angeles, CA',
        birthday='1972-08-15',
        joined='2011-07-03 19:17:22')
    # 10
    drew = User(
        username='DrewBarrymore',
        email='drew@mail.com',
        password='password',
        header='https://pbs.twimg.com/profile_banners/1588486417/1637165930/1500x500',
        profile_pic='https://pbs.twimg.com/profile_images/1461005864337383429/BXsBAk2S_400x400.jpg',
        display_name='Drew Barrymore',
        bio='linktr.ee/drewbarrymore',
        location='West Hollywood',
        birthday='1975-02-22',
        joined='2013-07-03 19:17:22')
    # 11
    elton = User(
        username='eltonofficial',
        email='elton@mail.com',
        password='password',
        header='https://pbs.twimg.com/profile_banners/174593833/1657896255/1500x500',
        profile_pic='https://pbs.twimg.com/profile_images/956225427135221765/oEPnGrkJ_400x400.jpg',
        display_name='Elton John',
        bio='The Rocket Man 🚀',
        location='London, UK',
        birthday='1947-03-25',
        joined='2010-08-03 19:17:22')
    # 12
    jamie = User(
        username='jamieleecurtis',
        email='jamie@mail.com',
        password='password',
        header='https://pbs.twimg.com/profile_banners/336851461/1625319051/1500x500',
        profile_pic='https://pbs.twimg.com/profile_images/1562117534177849345/aBB4mg1H_400x400.jpg',
        display_name='Jamie Lee Curtis',
        bio="@jamieleecurtis Facebook @curtisleejamie Instagram",
        location='Near enough to hear the ocean',
        birthday='1958-11-22',
        joined='2022-05-03 19:17:22')
    # 13
    amber = User(
        username='ambervalletta',
        email='amber@mail.com',
        password='password',
        header='https://reachingahead.com/wp-content/uploads/2017/03/blank-white-website-header.png',
        profile_pic='https://pbs.twimg.com/profile_images/700410683888828417/VvdNhmu-_400x400.jpg',
        display_name='Amber Valletta',
        bio='Hometown girl, occasional party crasher, hockey mama, fashion renegade.',
        location='Wherever I go, there I am',
        birthday='1974-02-09',
        joined='2011-05-03 19:17:22')
    # 14
    eric = User(
        username='EricClapton',
        email='eric@mail.com',
        password='password',
        header='https://pbs.twimg.com/profile_banners/763119618537902080/1656044205/1500x500',
        profile_pic='https://pbs.twimg.com/profile_images/765675814524325889/M5Ds_iIN_400x400.jpg',
        display_name='Eric Clapton',
        bio='Official Eric Clapton Quitter Account',
        location='Ripley, United Kingdom',
        birthday='1945-03-30',
        joined='2016-08-03 19:17:22')
    # 15
    lindsay = User(
        username='lindsaylohan',
        email='lindsay@mail.com',
        password='password',
        header='https://pbs.twimg.com/profile_banners/65992743/1650556053/1500x500',
        profile_pic='https://pbs.twimg.com/profile_images/1246102549184339971/kl7zrsqF_400x400.jpg',
        display_name='Lindsay Lohan',
        bio='🙏',
        location='The Bronx, NY',
        birthday='1986-07-02',
        joined='2009-08-03 19:17:22')
    # 16
    david = User(
        username='DavidHasselhoff',
        email='david@mail.com',
        password='password',
        header='https://pbs.twimg.com/profile_banners/20014300/1658261517/1500x500',
        profile_pic='https://pbs.twimg.com/profile_images/1408072275409215493/JqnNXUVm_400x400.jpg',
        display_name='David Hasselhoff',
        bio='𝗦𝗘𝗘 𝗜𝗧, 𝗕𝗘𝗟𝗜𝗘𝗩𝗘 𝗜𝗧, 𝗟I𝗩𝗘 𝗜𝗧\n🌎ғᴏʟʟᴏᴡ #theHoff\nhttp://cameo.com/davidhasselhoff\nHOFFICIAL MERCHANDISE: http://hoffshop.com',
        location='Los Angeles, California',
        birthday='1952-07-17',
        joined='2009-02-03 19:17:22')
    # 17
    christina = User(
        username='cgraw1',
        email='christina@mail.com',
        password='password',
        header='https://pbs.twimg.com/profile_banners/476010569/1602103118/1500x500',
        profile_pic='https://pbs.twimg.com/profile_images/1346983859716558849/os245gC1_400x400.jpg',
        display_name='Christina Graw',
        bio="I've got myself and no one else, but I'm strong enough to make it",
        location='Chesapeake, VA',
        birthday='1982-09-16',
        joined='2012-01-03 19:17:22')
    # 18
    brittany = User(
        username='_BLShelton',
        email='brittany@mail.com',
        password='password',
        header='https://pbs.twimg.com/profile_banners/1141334210/1655734559/1500x500',
        profile_pic='https://pbs.twimg.com/profile_images/1544180626881921024/XTWiK9lN_400x400.jpg',
        display_name='Brittany L. Shelton',
        bio="15 Years #SOBER•  Author: 'Discovering Beautiful' available on Amazon• #ComplexChildhoodTrauma #Advocate •COA •CSA •DV •Breaking Cycles •#Art = my therapy.",
        location='Kansas City, MO',
        birthday='1983-01-17',
        joined='2013-02-03 19:17:22')
    # 19
    anthony = User(
        username='AFlannagain',
        email='anthony@mail.com',
        password='password',
        header='https://p.favim.com/orig/2019/04/12/blue-solid-color-header-Favim.com-7052292.jpg',
        profile_pic='https://pbs.twimg.com/profile_images/821461844401553409/Y_l9jbdG_400x400.jpg',
        display_name='Anthony O Flannagain',
        bio='Rugby Boxing NFL Sports GAA',
        location='Beal feirste - Ireland',
        birthday='1980-12-04',
        joined='2017-01-03 19:17:22')
    # 20
    bryce = User(
        username='BryceHall',
        email='bryce@mail.com',
        password='password',
        header='https://pbs.twimg.com/profile_banners/2523637615/1620936501/1500x500',
        profile_pic='https://pbs.twimg.com/profile_images/1519594628004995072/FJ7-HRmJ_400x400.jpg',
        display_name='Bryce Hall',
        bio='i make videos / email: bryce@panthertalent.com',
        location='Los Angeles, CA',
        birthday='1994-07-19',
        joined='2014-05-03 19:17:22')
    # 21
    kaliyah = User(
        username='_kaliyahhhhhh',
        email='kaliyah@mail.com',
        password='password',
        header='',
        profile_pic='https://pbs.twimg.com/profile_images/1514897712700870658/VwBRjuxU_400x400.jpg',
        display_name='ka-lee-yah.',
        bio='da one 🤩',
        location='Detroit, MI',
        birthday='1993-09-28',
        joined='2015-01-03 19:17:22')
    # 22
    Ro = User(
        username='Forever7Ro',
        email='ro@mail.com',
        password='password',
        header='https://pbs.twimg.com/profile_banners/1424163207279677447/1658061173/1500x500',
        profile_pic='https://pbs.twimg.com/profile_images/1460794648163663872/qY1yvxId_400x400.jpg',
        display_name='Ro',
        bio='sevens over sixes.',
        location='',
        birthday='1989-08-19',
        joined='2021-08-03 19:17:22')
    # 23
    silas = User(
        username='Kenny16Techs',
        email='silas@mail.com',
        password='password',
        header='https://pbs.twimg.com/profile_banners/636642759/1629273989/1500x500',
        profile_pic='https://pbs.twimg.com/profile_images/1404085967250657280/nDSWrlpp_400x400.jpg',
        display_name='Silas P. Silas',
        bio='I talk about the NBA on camera for @miaheatbeat',
        location='Miami, FL',
        birthday='1990-04-27',
        joined='2012-07-03 19:17:22')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(john_allan)
    db.session.add(lebron)
    db.session.add(zach)
    db.session.add(steve_o)
    db.session.add(robert)
    db.session.add(ben)
    db.session.add(drew)
    db.session.add(elton)
    db.session.add(jamie)
    db.session.add(amber)
    db.session.add(eric)
    db.session.add(lindsay)
    db.session.add(david)
    db.session.add(christina)
    db.session.add(brittany)
    db.session.add(anthony)
    db.session.add(bryce)
    db.session.add(kaliyah)
    db.session.add(Ro)
    db.session.add(silas)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
