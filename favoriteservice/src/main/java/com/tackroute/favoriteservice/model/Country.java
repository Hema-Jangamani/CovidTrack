package com.tackroute.favoriteservice.model;

public class Country {
    private String countryName;
    private String flag;
    private String continent;
    private String totalCases;
    private String activeCases;
    private String recovered;
    private String deaths;

    public Country() {
    }

    public Country(String countryName, String flag, String continent, String totalCases, String activeCases, String recovered, String deaths) {
        this.countryName = countryName;
        this.flag = flag;
        this.continent = continent;
        this.totalCases = totalCases;
        this.activeCases = activeCases;
        this.recovered = recovered;
        this.deaths = deaths;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }

    public String getContinent() {
        return continent;
    }

    public void setContinent(String continent) {
        this.continent = continent;
    }

    public String getTotalCases() {
        return totalCases;
    }

    public void setTotalCases(String totalCases) {
        this.totalCases = totalCases;
    }

    public String getActiveCases() {
        return activeCases;
    }

    public void setActiveCases(String activeCases) {
        this.activeCases = activeCases;
    }

    public String getRecovered() {
        return recovered;
    }

    public void setRecovered(String recovered) {
        this.recovered = recovered;
    }

    public String getDeaths() {
        return deaths;
    }

    public void setDeaths(String deaths) {
        this.deaths = deaths;
    }

    @Override
    public String toString() {
        return "Country{" +
                "countryName='" + countryName + '\'' +
                ", flag='" + flag + '\'' +
                ", continent='" + continent + '\'' +
                ", totalCases='" + totalCases + '\'' +
                ", activeCases='" + activeCases + '\'' +
                ", recovered='" + recovered + '\'' +
                ", deaths='" + deaths + '\'' +
                '}';
    }
}
