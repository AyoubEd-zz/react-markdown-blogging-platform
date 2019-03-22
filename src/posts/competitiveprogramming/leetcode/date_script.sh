#!/bin/bash
read -p "Name Of The File: " -e FILE1
read -p "TAGS: " -e TAGS
TAGLINE=''
for tag in $TAGS; do 
        TAGLINE=$TAGLINE' #'$tag 
        echo -e $tag "\n">>tags.txt
done
FILE2=$(echo $FILE1 | tr '[A-Z]' '[a-z]')
FILE2=$(echo $FILE2 | tr ' ' '-')
FILE2=$(echo $FILE2 | tr '.' '-')
DATE=`date +%d-%m-%y`
FILE3=${DATE}_${FILE2}.md
touch $FILE3    
echo -e '# '$FILE1'\n''Posted on '$DATE'\n''tags = '$TAGLINE > $FILE3
