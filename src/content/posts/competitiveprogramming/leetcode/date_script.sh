#!/bin/bash
read -p "Name Of The File: " -e FILE1
read -p "TAGS: " -e TAGS
TAGLINE=''
for tag in $TAGS; do 
        TAGLINE=$TAGLINE' #'$tag 
        if grep -F $tag tags.txt
        then
                echo "Tag exists!"
        else 
                echo -e $tag >>tags.txt
        fi

done
FILE2=$(echo $FILE1 | tr '[A-Z]' '[a-z]')
FILE2=$(echo $FILE2 | tr ' ' '-')
FILE2=$(echo $FILE2 | tr '.' '-')
DATE=`date +%d-%m-%y`
FILE3=${DATE}_${FILE2}.md
touch $FILE2
echo -e '# '$FILE1'\n''Posted on '$DATE'\n''tags = '$TAGLINE > $FILE3
vim $FILE3
