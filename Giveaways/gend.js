module.exports = ({
name: "gend",
code: `
$setUserVar[gawreq;]
$setUserVar[gawwinners;]
$setUserVar[gawid;]
$setUserVar[gawprize;]

$editMessage[$message;🎉**GIVEAWAY ENDED** 🎉{title:$getUserVar[gawprize]}{description:
Winner: $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;Could not determine a winner];false;<@$randomText[$joinSplitText[;]]>]
Required Role: <@&$getUserVar[gawreq]>
Hosted by: <@$authorID>}{color:BLACK}{footer: Winners $getUserVar[gawwinners] | Ended at}{timestamp}]

$channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;There were no valid entries for the **$getUserVar[gawprize]** giveaway.];false;Congratulations <@$randomText[$joinSplitText[;]]> ! You have won the **$getUserVar[gawprize]** giveaway.]
https://discord.com/channels/$guildID/$channelID/$message]
$textSplit[$replaceText[$getReactions[$channelID;$message;🎉;id];$clientID,;];,]
$onlyIf[$message!=;**Syntax:** $getServerVar[prefix]gend <giveaway_id> ]
$onlyIf[$jsonRequest[https://normal-api.ml/topgg/hasvoted?bot=$clientID&user=$authorID&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgxMzMxMzMzMjI0OTEwMDMyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjIzMDQyMDc2fQ.7VuHSimgi2N_TVkRwER1GrEQz74dFZspq-tZi-QgrCw;voted;you haven't voted bruh]==true;{description:This is a **Voter-only** feature, If you want to use this command kindly vote for star bot [here](https://top.gg/bot/813313332249100329/vote)}{color:BLACK}]
$onlyIf[$getUserVar[command;$commandName]!=disabled;]
`
})