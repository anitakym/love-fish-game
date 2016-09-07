
var maxlen=0;
var sum=0;
var curlen=0;
var test = [1];
for(var i=0;i<10000;++i)
{
    for(var j=i;j<10000;++j)
    {
        curlen = j-i+1;
        sum += test[];
        a = test.split("0").length-1
        if(i<(k+1))
        {
            if(a>k/2&&curlen>maxlen)
            {
                maxlen = curlen;
            }

        }else
        {
            if(a<k/2&&curlen>maxlen)
            {
                maxlen = curlen;
            }
        }
    }
}

console.log(curlen.length);