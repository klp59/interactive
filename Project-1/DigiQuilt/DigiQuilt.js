var current_tile;
var mood;


document.querySelectorAll(".tile").forEach(tile => {

   tile.addEventListener('click', event => {

      console.log("clicked!!");
      // show the form with the options.
      document.getElementById("options").style.opacity = 1;
      document.getElementById("options").style.pointerEvents = "initial";


      // reset all radio buttons, so none are selected
      var options = document.getElementsByTagName("input");
      for (var i = 0; i < options.length; i++) {
        options[i].checked = false;
      }

      // figure out which block was clicked on
      current_tile = event.target;
  });

});

document.getElementById("submit").addEventListener('click', event => {
 
  // hide the form
  document.getElementById("options").style.opacity = 0;
  document.getElementById("options").style.pointerEvents = "none";

  // figure out which option was selected.
  var options = document.getElementsByTagName("input");
  for (var i=0;i<options.length;i++) {
    if (options[i].checked) {
      mood = options[i].value;
    }
  }

  // depending on the mood, change the display of the block.
  // you could add some code to display the correct image here!
  if (mood == "confident") {
    // current_tile.style.backgroundImage = "url('water.png')";
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/3b721a23ef53c743c08fd2c748b1d81266aef6e0e0073271203c16b720fbc9f3/25a_Confident.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "grateful") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/a08b79919057393fffbf9690a4de360bbbc37352fc66529fc57549b0a773d0d4/25a_Grateful.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "curious") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/b078e939635813d525798a7556dc61aa6ec09143de22e0a7c8c4def281e630e1/25a_Curious.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "silly") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/1cc6ee2dd7fa400e25b158c3eb9bb4dea26a8bb0dcb7be82f48f35bc433cd3eb/25a_Silly.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "blissful") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/ecb9253c132b9a2bd3740fde8d546440c88b52f70ffb5abd2cb442a7be4c55cf/Untitled-1-Recovered-15.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "refreshed") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/d78d8d3c58a8e0cb9b5c8bd256c734384a37a841f2a5adf587be4d355462c8fa/25a_Refreshed.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "loved") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/9259d515d891d31055d87e072a7b15a23a773d6e239006cecf1a296c90374cf8/25a_Loved.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "bouncy") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/10866c3a23a40a20245542da86b8c00bbfd95ae26a493eb0beb81933e3b06cc4/25a_Bouncy.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "accepted") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/212cd9dfdc1600d15cb1cb33309f78c14a5b13f5f4119454e35d0c6787afd62d/25a_Accepted.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "anticipating") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/e856cb6164fce5adfa91949a66cdf4f4108d6648a11cda0b3185db8a236b9f0b/25a_Anticipating.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "modest") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/4119960752cde4ed3d2cc848baa7511bd1a616af800d5db90fcb94fd4c4e2bf3/25a_Modest.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "meditative") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/cc7c60bab52e9fd40f9f87354b87ecfa90ccf82a12c20cdac73c99df72b26e79/25a_Meditative.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "bold") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/be01b1f01fb3cb4400622b92ea75be4a304e28eae597c71bd4deac86c934d5c4/25a_Bold.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "affirmative") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/c195cbc5ff527c070b40aff8535b28c39ed84690159319be193005e975ad8076/25a_Affirmed.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "sensitive") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/e0355fca0243abd734101b632f17b57f4dd74854f70ccb70c129e2cfd42fd252/25a_Sensitive.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "aroused") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/072ae421aa148849080541fec942890b75391e709a483dad72c25f718d55ef26/25a_Aroused.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "free") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/e4a0b9d0e03f55f2cce6b49ba1c777ea52d602f49ab22a01548baafab9039bbb/25a_Free.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "playful") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/7ee13fe213930ae19c668d8eed206f7ed3d8e268d83e326f53ad02bc85af3bb3/25a_Playful.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "content") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/661fb9c0baf49dc6196d49db0d289845d4303f9e32e7973451b6c59473e08229/25a_Conent.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "peaceful") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/d0f58bca2cd53fe0fade21a3f0b8c941292ab948cd3cdc906cfc8672119d9303/25a_Peaceful.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "trusting") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/1be9a9dfb989b9a8e595756dc4e2d54c57cb3bd2111074328ebb355f381a077d/25a_Trusting.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "creative") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/20b4f0754d34e602df72c6af381a1e800a0a7b573d1b73f6cba5d51c12fffd92/25a_Creative.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "proud") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/5ca4cbb7d72c33ad9d16b087849cb4b5c11fb373c7eebbdf0137b8e0a306c842/25a_Proud.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "excited") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/183e6359a43fc31c0fced9e8e957ca6135bb8522afb72fec7d45f8fd9b4f24ed/Untitled-1-05.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "aligned") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/a88b6a1e79f18e13394379116cbb48a00840768bead6f36838d759278ba41ed6/25a_Aligned.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "holy") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/9830a747b0bafc4a0fb54faa6a5903a7b4f8807b960a1e501e77dc14dca7483d/25a_Holy.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "cold") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/a2e68dbd9a6a5f5da2cee0ebde253d68aa0ce1e38745a8dcf12e724bfe53fbb3/Untitled-1-Recovered-01.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "dirty") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/dee72c7b91ac9b5223e14efcd3c0be94a5b9de81ed29df58d3cb089bb0e0e522/25b-Recovered_Dirty.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "cynical") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/e7ee42f4f1e0d12df50ca3ce134507a007b666addfa9012f2ba3152827283a08/Untitled-1-Recovered-16.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "gloomy") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/d8b2902c44d6e4ba468aeeaf7bf1e899dbc05f89fc24d3746b459401c59780d0/25b-Recovered_Gloomy.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "lonely") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/6821d574906ff6169042c995fa9f29cb7436124c1cecce4d9e646050a5b09ab6/25b-Recovered_Lonely.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "unfocused") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/9fb5018a5f2cbf33c7436336be9f940b2c17c1cf7d107e543465b584ea5646e7/new-06.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "hostile") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/6ca6950f3b534f245891cb5aa7b8d31aa11068574bf5213336186de2f1ec07ee/Untitled-1-Recovered-17.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "skeptical") {
    current_tile.getElementsByTagName("img")[0].src = "whttps://freight.cargo.site/t/original/i/e938cfe715c405da5a6417551d647c19761bd7ffa9ccff1776693be44cc790b9/new-25.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "out of control") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/4d9aef72f5582aa88c51a79e27b994734107c9b2048466f32acafa4e0c55bd52/new-15.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "apathetic") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/51ca0178bec946e6b9fd246163a7cd18c0e96a4c65b93ce494fb13995abd6979/new-22.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "terrified") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/36fc4f39b06577981b77486450a0c7e829d68bf0e38e5dc2e09c36fcde1552c4/new-24.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "grieving") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/a28f74df2769b83ef6118d35145f3228e09a773543d551782fb071f8e0903479/new-12.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "weird") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/b816a6f34e78e48f72f927c909ed91fd70b757a936ddb3a6c92f29f29f08f6fa/new-20.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "low-spirited") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/6b4654fbce6d4b44dcceecc6a9cd31db840a14eb3d1fbb01f49b42c84eea7564/25b-Recovered-23.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "dejected") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/1dfda369a424b359af25cb6e579fd303131d6321aeadd7cdec30ede69308b078/25b-Recovered-16.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "hatred") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/20cd4a1ccae33c5a7f6b3ea52b85e27bec5c8918cce7760c6dffce8f4608bc72/new-21.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "distant") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/ff091d580b85d773ee7f2e4c74d97da84ccf65e616e8599d484cee84a976cdb1/new-19.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "powerless") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/e07398dc010ef94c14976135363c683680a98e469990206b3220dcea992a1e0f/new-10.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "empty") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/295f218aa99953f094a86e00201a506ec1e4020de51ea29c520f405d6bd37efb/new-23.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "embarrassed") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/16501f85803c14d148d9dabdbed39ac3a3d24e37aa01d8133ced6578f94937e5/25b-Recovered-24.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "horrified") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/6f055a04761378fc0c704d4db5cea1c99130eac42480e59c99c85ea736665ea9/Untitled-1-04.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "repelled") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/ff091d580b85d773ee7f2e4c74d97da84ccf65e616e8599d484cee84a976cdb1/new-19.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "judgemental") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/13ff6b1009cec18560aa4c58a7cbb3d3ec9c20179ca6e991d62c342adae3543e/new-16.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "devastated") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/34801785cf067c80a8af2be4eafbe8cdb74e54b1e5171499cba5f73b8b62fe14/new-07.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "worthless") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/5f57e989c65a5e98878b5608a54ee40e1179157b1fc4cd84f79917f0ee406cd7/new-08.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "abandoned") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/1067e1b48f4bb8af41160489f9a646cd8b9a7ffe8fe5b68b6c794408d48b7c46/new-09.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "aggressive") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/c4b2514b574456d9e46eb8979387ccd1a18ff27249ccc6a1cd5be71dbff47ded/Untitled-1-Recovered-24.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "open") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/5633f645e2261c6332aefa628674f039eafe3ceb45c190d1410b548de8545ac4/Untitled-1-Recovered-02.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "alienated") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/ccf7965759375b86b309772ed3e4e35ebc4bd4f629dfa75eac151cd8fbce1caa/Untitled-1-Recovered-18.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "jealous") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/6d16c30820fb665b52d8c8b8a4ad45b324e0a1e395379ec9b2c00689ac20bb5f/Untitled-1-Recovered-23.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "perplexed") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/8cf2176e1523346e9eaafd7a1e5e95f8c5549e71d9cbc608f860829e05559a20/25b-Recovered-18.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "courageous") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/45bfb653da665b8746fce17b32b55c55a0760afc945b4ded96232233a4d9441f/Untitled-1-Recovered-12.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "hopeful") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/bae6ece77a0061a52a537dd861f19390f2a05a0c2a0e9288e13d9e2453941f3e/Untitled-1-Recovered-14.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "bored") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/ae4b7200a0c83246d699d169e01942606fb9360832354cd553e3bf16c80a657a/new-04.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "humiliated") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/ef541728ea0a22c093006fa7a07a58ae23641e54526f820d70048d5305ba7ea3/Untitled-1-01.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "suspicious") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/e1b43840dd806205e80b128a549e79546365b879209dc35843184eb7ab6c0568/25b-Recovered-01.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "overwhelmed") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/24b90300d49bcce6518db491839a4b2663de8becc93e98dd544aad3ce2784fdf/25b-Recovered-11.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "hateful") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/0dd5a384c168954dd11330d36ca264e597ee69839d21fbb0bf4a0660fbd4e99e/25b-Recovered-02.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "ridiculed") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/d3b1340d45952ea446dfca5528303897f0805cb0e4752130554dd439d543899d/new-05.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "frustrated") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/6b1e6f362980c4fc447375640771ec02239678f24c3b5f3882d5e3d95d0a7027/25b-Recovered-20.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "inquisitive") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/33cc8430e9c55aaee5c311beeb1feb50e5c35045bd3fb34f22f36047911081d3/25b-Recovered-09.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "submissive") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/a073aa7e4bb746229ff1db990cf98b2d5d07b7c353a8416202ce0fe6801664ff/Untitled-1-Recovered-03.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "hesitant") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/9b1d1b05116e4663c67c45eef0c0d767017b2a0414083d67fd2c1892f3cb87ae/25b-Recovered-03.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "startled") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/db8dcf386acbb1960282673923cad6231bb39ac305fbf38193f533e00a8ba75c/25b-Recovered-19.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "furious") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/1a7dde3d9f905c82f15d6dc086442eb9ceec94ce4a7f8ea68bb5e2c900a8c671/new-02.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "repugnant") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/99ae45adf5cb0f003bcfa342b2f35b4a854b95eb23d6624ab7eb5de99fd3a90a/25b-Recovered-10.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "optimistic") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/8d5ba974de0c44291d052823dfbdbf99d34ee426e9d32c5f4bd67af9fbb9d232/25b-Recovered-15.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "insecure") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/d90a4c309f876a10a25e3060821230d4dc65c20fa22feeba76d946fd61b35d0a/Untitled-1-Recovered-11.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "important") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/bd958b2b7626a7fdf81e20f4218d7562ee075d0bc6be12b6a8a28f52e5382697/new-17.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "powerful") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/c8fc2124a1388809d63e2146d2a91360670347934069a34514af85951ef0dce4/Untitled-1-Recovered-09.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "threatened") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/a7ba0401315456e8812c6ec3b8d5bbab163d15bfa400a6da79ce0c576c81f5a3/25b-Recovered-05.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "ashamed") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/4b024f26a344f7115b570bd0d9dd8528c0ff66bf7ff2d074e74ea58c5ef0f863/25b-Recovered-06.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "confused") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/8b0d60f0cd26a32391ba7350d17582241af1a5840675187c21761d9f498f8e9e/25b-Recovered-14.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "disillusioned") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/58b1164fa1b80e336055aacc46d40da73599c852cf008ccb642ac03c19412cd2/25b-Recovered-07.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "critical") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/36f8281c988ccaaa9901972a36d06dd9cfcf0b827ba0616dbf1f7b04c215f4a1/Untitled-1-Recovered-13.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "ecstatic") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/e8c7d17c889eea15cb5e6d527e9ad392329306d40596563363b7799881dd046b/Untitled-1-Recovered-07.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "inspired") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/1ec77c308ddfabf8cc7b88228ed235c4a1001ec8c88a3ca486a683c81f9abb1f/Untitled-1-Recovered-10.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "awful") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/902958ef753c358edb8660aed51dda2dba1b16b141f9b99518f85e8ba61e2f76/Untitled-1-02.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "infuriated") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/e1396b7eb7344e0f756c0a221d543c4a999a19f5012a27d724b14e21b1846fe7/new-03.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "irritated") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/59660dd2f93bf62d360ae871ae858ad38701cde6eb396d0206b57b2e789e3797/25b-Recovered-13.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "depressed") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/a2b613f2142f46cd1d9b0de1599f2a89a3c1838bfcf493f7c0469d0c4baf6df5/new-13.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "joyful") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/c3dfa9a1a05c588eb9a27c4d03244e3d479807aca8781494deca4fa921a4e3bb/Untitled-1-Recovered-05.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "amused") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/ca41dc21a2c49e66c15ea67e7933838225ced970b12021f0a8dae6018df170de/Untitled-1-Recovered-06.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "vulnerable") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/a9f268bbbf4587e30bed52774faaa520b90bc353e52083732a7a44864a6cdfaf/25b-Recovered-08.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "respected") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/b1e3629e145150d4d981c1b72000d70510d1aa566fc3427eb65022fd3e3caf6d/Untitled-1-Recovered-19.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "liberated") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/3b85aee7952001d96a84e13615524219fef14ddfdb560fa4fbff548d3839fdf2/Untitled-1-Recovered-20.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "withdrawn") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/096f2c3553d0035e6b6e1cca100e5388e2ce4265159c3af4b6d9ac3b01b444cb/Untitled-1-Recovered-08.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "indifferent") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/fb15014872335181dc5364ab908ebcef23407b8843188b7515fb64d6a5924e75/25b-Recovered-12.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "powerless") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/ad920abf7e75fbe34517c4642ee9a73445c2466d9f67eaf2b32cb4731fb5a764/Untitled-1-Recovered-04.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "fulfilled") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/b3cb01f46c2d014601be6895432e78babb798ec2f1dd0915bde23c074c8f3bc7/Untitled-1-Recovered-22.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "dismayed") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/d5546ff30ad8fc994df6dec79c61d3163974cefc86c37ed5082bf7e3d48808c9/new-01.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "hurt") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/d56e241ad90b4c8daf48bdf7d444a08ef2962bda02893c0e6f754ea3954b2034/new-11.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "inadequate") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/5b61e7e8a3a2b9283ebacb8a4ecae58c25c42098b1e2867dbd74fc75d28d8113/new-14.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "eager") {
    current_tile.getElementsByTagName("img")[0].src = "https://freight.cargo.site/t/original/i/95e08d88395859acd43083425d4952c3dd06a13c49b210ff603fcee07a7abf74/25a_Content.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }

 
});