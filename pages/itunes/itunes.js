// pages/itunes/itunes.js
Page({

  /**
   * 页面的初始数据
   */
  data: { "all_song": [{ "discounted": 0, "title": "Taylor Swift - ME! (feat. Brendon Urie of Panic! At The Disco)", "now_color": "p2", "position": 1, "now_point": 1.0 }, { "discounted": 0, "title": "Lil Nas X - Old Town Road (feat. Billy Ray Cyrus) [Remix]", "now_color": "n0", "position": 2, "now_point": 0.1305 }, { "discounted": 0, "title": "Blake Shelton - God's Country", "now_color": "n1", "position": 3, "now_point": 0.0413 }, { "discounted": 0, "title": "Florence + The Machine - Jenny of Oldstones (Game of Thrones)", "now_color": "p1", "position": 4, "now_point": 0.0315 }, { "discounted": 0, "title": "Lady Gaga & Bradley Cooper - Shallow", "now_color": "n0", "position": 5, "now_point": 0.0309 }, { "discounted": 0, "title": "Jonas Brothers - Sucker", "now_color": "p1", "position": 6, "now_point": 0.0292 }, { "discounted": 1, "title": "Ava Max - Sweet but Psycho", "now_color": "n1", "position": 7, "now_point": 0.0284 }, { "discounted": 0, "title": "P!nk - Walk Me Home", "now_color": "p2", "position": 8, "now_point": 0.0275 }, { "discounted": 0, "title": "Lil Nas X - Old Town Road", "now_color": "n1", "position": 9, "now_point": 0.0245 }, { "discounted": 0, "title": "Lizzo - Truth Hurts", "now_color": "n1", "position": 10, "now_point": 0.0238 }, { "discounted": 0, "title": "Post Malone & Swae Lee - Sunflower (Spider-Man: Into the Spider-Verse)", "now_color": "n1", "position": 11, "now_point": 0.0237 }, { "discounted": 0, "title": "Billie Eilish - bad guy", "now_color": "n2", "position": 12, "now_point": 0.0222 }, { "discounted": 0, "title": "Sam Smith & Normani - Dancing with a Stranger", "now_color": "n0", "position": 13, "now_point": 0.0209 }, { "discounted": 1, "title": "Lauren Daigle - You Say", "now_color": "n0", "position": 14, "now_point": 0.0201 }, { "discounted": 0, "title": "Marshmello - Here With Me (feat. CHVRCHES)", "now_color": "n0", "position": 15, "now_point": 0.02 }, { "discounted": 0, "title": "Post Malone - Wow.", "now_color": "n0", "position": 16, "now_point": 0.0199 }, { "discounted": 0, "title": "Morgan Wallen - Whiskey Glasses", "now_color": "n1", "position": 17, "now_point": 0.0183 }, { "discounted": 0, "title": "Thomas Rhett - Look What God Gave Her", "now_color": "n0", "position": 18, "now_point": 0.0177 }, { "discounted": 0, "title": "Lil Dicky - Earth", "now_color": "n2", "position": 19, "now_point": 0.0176 }, { "discounted": 0, "title": "Martin Garrix, Macklemore & Fall Out Boy - Summer Days (feat. Macklemore & Patrick Stump of Fall Out Boy)", "now_color": "p2", "position": 20, "now_point": 0.0167 }, { "discounted": 0, "title": "Kelly Clarkson - Broken & Beautiful (From the Movie \"UGLYDOLLS\")", "now_color": "p1", "position": 21, "now_point": 0.0166 }, { "discounted": 0, "title": "Marshmello, Tyga & Chris Brown - Light It Up", "now_color": "p2", "position": 22, "now_point": 0.0162 }, { "discounted": 0, "title": "Beyonc\u00e9 - Before I Let Go (Homecoming Live Bonus Track)", "now_color": "n1", "position": 23, "now_point": 0.0155 }, { "discounted": 0, "title": "Kim Petras - Broken", "now_color": "n0", "position": 24, "now_point": 0.0155 }, { "discounted": 0, "title": "Khalid - Talk", "now_color": "n1", "position": 25, "now_point": 0.0154 }, { "discounted": 0, "title": "Luke Combs - Beautiful Crazy", "now_color": "p1", "position": 26, "now_point": 0.0148 }, { "discounted": 0, "title": "Daddy Yankee & Katy Perry - Con Calma (feat. Snow) [Remix]", "now_color": "n2", "position": 27, "now_point": 0.0145 }, { "discounted": 0, "title": "Rob Thomas - One Less Day (Dying Young)", "now_color": "p2", "position": 28, "now_point": 0.0144 }, { "discounted": 0, "title": "Luke Bryan - Knockin' Boots", "now_color": "p1", "position": 29, "now_point": 0.0134 }, { "discounted": 0, "title": "Panic! At the Disco - High Hopes", "now_color": "p1", "position": 30, "now_point": 0.0131 }, { "discounted": 0, "title": "Kane Brown - Good As You", "now_color": "n0", "position": 31, "now_point": 0.0128 }, { "discounted": 0, "title": "Bruce Springsteen - Hello Sunshine", "now_color": "p2", "position": 32, "now_point": 0.0128 }, { "discounted": 0, "title": "Ariana Grande - 7 rings", "now_color": "n0", "position": 33, "now_point": 0.0115 }, { "discounted": 0, "title": "Imagine Dragons - Bad Liar", "now_color": "p1", "position": 34, "now_point": 0.0114 }, { "discounted": 0, "title": "Lee Brice - Rumor", "now_color": "n0", "position": 35, "now_point": 0.0111 }, { "discounted": 0, "title": "Dean Lewis - Be Alright", "now_color": "n1", "position": 36, "now_point": 0.0109 }, { "discounted": 0, "title": "Marshmello & Bastille - Happier", "now_color": "p1", "position": 37, "now_point": 0.0107 }, { "discounted": 0, "title": "Bastille - Doom Days", "now_color": "p2", "position": 38, "now_point": 0.0106 }, { "discounted": 0, "title": "Jonas Brothers - Cool", "now_color": "p1", "position": 39, "now_point": 0.0095 }, { "discounted": 0, "title": "P!nk - Love Me Anyway (feat. Chris Stapleton)", "now_color": "p2", "position": 40, "now_point": 0.0094 }, { "discounted": 0, "title": "P!nk - Hurts 2B Human (feat. Khalid)", "now_color": "p2", "position": 41, "now_point": 0.0094 }, { "discounted": 0, "title": "Lizzo - Juice", "now_color": "n2", "position": 42, "now_point": 0.0092 }, { "discounted": 0, "title": "Billie Eilish - when the party's over", "now_color": "n2", "position": 43, "now_point": 0.0089 }, { "discounted": 0, "title": "BTS - Boy With Luv (feat. Halsey)", "now_color": "p2", "position": 44, "now_point": 0.0089 }, { "discounted": 0, "title": "Billie Eilish - bury a friend", "now_color": "n1", "position": 45, "now_point": 0.0088 }, { "discounted": 0, "title": "Lil Peep & iLoveMakonnen - I've Been Waiting (feat. Fall Out Boy)", "now_color": "p1", "position": 46, "now_point": 0.0088 }, { "discounted": 0, "title": "Ariana Grande - break up with your girlfriend, i'm bored", "now_color": "n2", "position": 47, "now_point": 0.0082 }, { "discounted": 0, "title": "Halsey - Without Me", "now_color": "n2", "position": 48, "now_point": 0.0081 }, { "discounted": 0, "title": "Andy Grammer - Don't Give Up on Me (From \"Five Feet Apart\")", "now_color": "p1", "position": 49, "now_point": 0.0079 }, { "discounted": 0, "title": "Ozuna - Baila Baila Baila (feat. Daddy Yankee, J Balvin, Farruko & Anuel AA) [Remix]", "now_color": "p2", "position": 50, "now_point": 0.0078 }, { "discounted": 0, "title": "Five Finger Death Punch - Blue on Black (feat. Kenny Wayne Shepherd, Brantley Gilbert & Brian May)", "now_color": "n2", "position": 51, "now_point": 0.0076 }, { "discounted": 0, "title": "Chase Rice - Eyes On You", "now_color": "n0", "position": 52, "now_point": 0.0076 }, { "discounted": 0, "title": "Luis Fonsi, Sebasti\u00e1n Yatra & Nicky Jam - Date La Vuelta", "now_color": "p2", "position": 53, "now_point": 0.0074 }, { "discounted": 0, "title": "Thomas Rhett - Remember You Young", "now_color": "n2", "position": 54, "now_point": 0.0074 }, { "discounted": 0, "title": "Kelsea Ballerini - Miss Me More", "now_color": "n0", "position": 55, "now_point": 0.0073 }, { "discounted": 0, "title": "PRETTYMUCH - Phases", "now_color": "p2", "position": 56, "now_point": 0.0073 }, { "discounted": 0, "title": "Maren Morris - GIRL", "now_color": "p1", "position": 57, "now_point": 0.0071 }, { "discounted": 0, "title": "Panic! At the Disco - Hey Look Ma, I Made It", "now_color": "p2", "position": 58, "now_point": 0.0068 }, { "discounted": 0, "title": "Mustard & Migos - Pure Water", "now_color": "n1", "position": 59, "now_point": 0.0068 }, { "discounted": 0, "title": "benny blanco, Halsey & Khalid - Eastside", "now_color": "n0", "position": 60, "now_point": 0.0066 }, { "discounted": 0, "title": "Khalid - Better", "now_color": "n2", "position": 61, "now_point": 0.0066 }, { "discounted": 0, "title": "Old Dominion - Make It Sweet", "now_color": "p1", "position": 62, "now_point": 0.0065 }, { "discounted": 0, "title": "The Chainsmokers & 5 Seconds of Summer - Who Do You Love", "now_color": "n0", "position": 63, "now_point": 0.0065 }, { "discounted": 1, "title": "Cardi B & Bruno Mars - Please Me", "now_color": "n1", "position": 64, "now_point": 0.006 }, { "discounted": 0, "title": "Dan + Shay - Speechless", "now_color": "n2", "position": 65, "now_point": 0.0059 }, { "discounted": 0, "title": "Brett Young - Here Tonight", "now_color": "n0", "position": 66, "now_point": 0.0056 }, { "discounted": 0, "title": "SZA, The Weeknd & Travis Scott - Power is Power", "now_color": "n2", "position": 67, "now_point": 0.0056 }, { "discounted": 0, "title": "P!nk - Walk Me Home", "now_color": "p2", "position": 68, "now_point": 0.0056 }, { "discounted": 0, "title": "J. Cole - MIDDLE CHILD", "now_color": "n2", "position": 69, "now_point": 0.0055 }, { "discounted": 0, "title": "Lady Gaga - Always Remember Us This Way", "now_color": "n1", "position": 70, "now_point": 0.0055 }, { "discounted": 0, "title": "Kacey Musgraves - Rainbow", "now_color": "p1", "position": 71, "now_point": 0.0054 }, { "discounted": 0, "title": "The Chainsmokers - Do You Mean (feat. Ty Dolla $ign and b\u00fclow)", "now_color": "p2", "position": 72, "now_point": 0.0051 }, { "discounted": 0, "title": "Billie Eilish - you should see me in a crown", "now_color": "n2", "position": 73, "now_point": 0.0051 }, { "discounted": 0, "title": "Offset - Clout (feat. Cardi B)", "now_color": "p1", "position": 74, "now_point": 0.0051 }, { "discounted": 0, "title": "Eli Young Band - Love Ain't", "now_color": "p1", "position": 75, "now_point": 0.005 }, { "discounted": 0, "title": "Post Malone - Wow.", "now_color": "n0", "position": 76, "now_point": 0.0046 }, { "discounted": 0, "title": "Meek Mill - Going Bad (feat. Drake)", "now_color": "n2", "position": 77, "now_point": 0.0046 }, { "discounted": 0, "title": "The Black Keys - Eagle Birds", "now_color": "p2", "position": 78, "now_point": 0.0046 }, { "discounted": 0, "title": "Jon Pardi - Night Shift", "now_color": "n1", "position": 79, "now_point": 0.0046 }, { "discounted": 0, "title": "DJ Snake & Sheck Wes - Enzo (feat. Offset, 21 Savage & Gucci Mane)", "now_color": "p1", "position": 80, "now_point": 0.0046 }, { "discounted": 0, "title": "Kygo & Rita Ora - Carry On (from the Original Motion Picture \u201cPOK\u00c9MON Detective Pikachu\u201d)", "now_color": "n2", "position": 81, "now_point": 0.0046 }, { "discounted": 0, "title": "Dan + Shay - Tequila", "now_color": "n2", "position": 82, "now_point": 0.0046 }, { "discounted": 0, "title": "LANY & Julia Michaels - okay", "now_color": "p2", "position": 83, "now_point": 0.0045 }, { "discounted": 0, "title": "Florida Georgia Line - Talk You Out of It", "now_color": "n1", "position": 84, "now_point": 0.0044 }, { "discounted": 0, "title": "Billie Eilish & Khalid - lovely", "now_color": "n2", "position": 85, "now_point": 0.0044 }, { "discounted": 0, "title": "Gabby Barrett - I Hope", "now_color": "n0", "position": 86, "now_point": 0.004 }, { "discounted": 1, "title": "for KING & COUNTRY - God Only Knows", "now_color": "n1", "position": 87, "now_point": 0.004 }, { "discounted": 0, "title": "Mabel - Don't Call Me Up", "now_color": "n1", "position": 88, "now_point": 0.0039 }, { "discounted": 0, "title": "Eric Church - Some of It", "now_color": "n1", "position": 89, "now_point": 0.0039 }, { "discounted": 0, "title": "Avicii - SOS (feat. Aloe Blacc)", "now_color": "n0", "position": 90, "now_point": 0.0039 }, { "discounted": 0, "title": "P!nk - A Million Dreams", "now_color": "p1", "position": 91, "now_point": 0.0038 }, { "discounted": 0, "title": "Tyga - Goddamn", "now_color": "n0", "position": 92, "now_point": 0.0038 }, { "discounted": 0, "title": "Chris Stapleton - Tennessee Whiskey", "now_color": "n0", "position": 93, "now_point": 0.0037 }, { "discounted": 0, "title": "Billie Eilish - ocean eyes", "now_color": "n0", "position": 94, "now_point": 0.0037 }, { "discounted": 0, "title": "Madonna & Maluma - Medell\u00edn", "now_color": "n0", "position": 95, "now_point": 0.0037 }, { "discounted": 0, "title": "Ed Sheeran - Perfect", "now_color": "n0", "position": 96, "now_point": 0.0035 }, { "discounted": 0, "title": "Imagine Dragons - Thunder", "now_color": "n0", "position": 97, "now_point": 0.0034 }, { "discounted": 0, "title": "Lauv - Drugs & The Internet", "now_color": "n0", "position": 98, "now_point": 0.0034 }, { "discounted": 0, "title": "Lewis Capaldi - Someone You Loved", "now_color": "n0", "position": 99, "now_point": 0.0033 }, { "discounted": 0, "title": "Old Dominion - One Man Band", "now_color": "n0", "position": 100, "now_point": 0.0031 }, { "discounted": 0, "title": "Lizzo - Good as Hell", "now_color": "n0", "position": 101, "now_point": 0.0 }, { "discounted": 0, "title": "Luke Combs - She Got the Best of Me", "now_color": "n0", "position": 102, "now_point": 0.0 }, { "discounted": 0, "title": "Queen - Don't Stop Me Now", "now_color": "n0", "position": 103, "now_point": 0.0 }, { "discounted": 0, "title": "Jason Aldean - Rearview Town", "now_color": "n0", "position": 104, "now_point": 0.0 }, { "discounted": 0, "title": "Brantley Gilbert - Welcome to Hazeville (feat. Colt Ford, Lukas Nelson & Willie Nelson)", "now_color": "n0", "position": 105, "now_point": 0.0 }, { "discounted": 0, "title": "Why Don't We - Don't Change", "now_color": "n0", "position": 106, "now_point": 0.0 }, { "discounted": 0, "title": "Lizzo - Tempo (feat. Missy Elliott)", "now_color": "n0", "position": 107, "now_point": 0.0 }, { "discounted": 0, "title": "Daddy Yankee - Con Calma (feat. Snow)", "now_color": "n0", "position": 108, "now_point": 0.0 }, { "discounted": 0, "title": "Blueface - Thotiana", "now_color": "n0", "position": 109, "now_point": 0.0 }, { "discounted": 0, "title": "YK Osiris - Worth It", "now_color": "n0", "position": 110, "now_point": 0.0 }, { "discounted": 0, "title": "Lauv & Troye Sivan - i'm so tired...", "now_color": "n0", "position": 111, "now_point": 0.0 }, { "discounted": 0, "title": "Chris Brown - Wobble Up (feat. Nicki Minaj & G-Eazy)", "now_color": "n0", "position": 112, "now_point": 0.0 }, { "discounted": 0, "title": "Ariana Grande - thank u, next", "now_color": "n0", "position": 113, "now_point": 0.0 }, { "discounted": 0, "title": "FKA twigs - Cellophane", "now_color": "n0", "position": 114, "now_point": 0.0 }, { "discounted": 0, "title": "Bebe Rexha - Last Hurrah", "now_color": "n0", "position": 115, "now_point": 0.0 }, { "discounted": 0, "title": "FLETCHER - Undrunk", "now_color": "n0", "position": 116, "now_point": 0.0 }, { "discounted": 0, "title": "Lizzo - Soulmate", "now_color": "n0", "position": 117, "now_point": 0.0 }, { "discounted": 0, "title": "BLACKPINK - Kill This Love", "now_color": "n0", "position": 118, "now_point": 0.0 }, { "discounted": 0, "title": "Brynn Cartelli - Grow Young (Version 1)", "now_color": "n0", "position": 119, "now_point": 0.0 }, { "discounted": 0, "title": "Bethel Music & Molly Skaggs - Ain't No Grave (Live)", "now_color": "n0", "position": 120, "now_point": 0.0 }, { "discounted": 0, "title": "Maggie Rogers - Light On", "now_color": "n0", "position": 121, "now_point": 0.0 }, { "discounted": 0, "title": "YNW Melly - Murder on My Mind", "now_color": "n0", "position": 122, "now_point": 0.0 }, { "discounted": 0, "title": "Queen - Bohemian Rhapsody", "now_color": "n0", "position": 123, "now_point": 0.0 }, { "discounted": 0, "title": "Imagine Dragons - Natural", "now_color": "n0", "position": 124, "now_point": 0.0 }, { "discounted": 0, "title": "Jake Owen - Down to the Honkytonk", "now_color": "n0", "position": 125, "now_point": 0.0 }, { "discounted": 0, "title": "Beyonc\u00e9 - Sorry (Original Demo)", "now_color": "n0", "position": 126, "now_point": 0.0 }, { "discounted": 0, "title": "5 Seconds of Summer - Youngblood", "now_color": "n0", "position": 127, "now_point": 0.0 }, { "discounted": 0, "title": "French Montana - Slide (feat. Blueface & Lil Tjay)", "now_color": "n0", "position": 128, "now_point": 0.0 }, { "discounted": 0, "title": "A Boogie wit da Hoodie - Look Back at It", "now_color": "n0", "position": 129, "now_point": 0.0 }, { "discounted": 0, "title": "TWICE - FANCY", "now_color": "n0", "position": 130, "now_point": 0.0 }, { "discounted": 0, "title": "Crosby, Stills, Nash & Young - Find the Cost of Freedom", "now_color": "n0", "position": 131, "now_point": 0.0 }, { "discounted": 0, "title": "Ally Brooke - Low Key (feat. Tyga)", "now_color": "n0", "position": 132, "now_point": 0.0 }] },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})