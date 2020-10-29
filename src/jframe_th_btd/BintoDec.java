package jframe_th_btd;

import static java.lang.Math.pow;

public class BintoDec {
    public int BinTwoDec(String bin){
        int decimal=0;
        char[] array_convert = bin.toCharArray();
        for(int i=0; i<=array_convert.length-1; i++){
            if(array_convert[i]=='1'){
                decimal+=pow(2,array_convert.length-i-1);
            }}
        return decimal;
    }
    /*public static void main(String[] args) {
        BintoDec bin2dec = new BintoDec();
        System.out.println(bin2dec.BinTwoDec("1001"));
    }*/
}
